import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import Header from '../Header';

describe('Header Component', () => {
  it('renders the logo text', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Cozy Threads')).toBeInTheDocument();
  });

  it('renders the sustainability message', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(/Sustainable fashion, fairly made, ethically sourced./i)).toBeInTheDocument();
  });

  it('shows cart with zero items initially', () => {
    renderWithProviders(<Header />);
    expect(screen.queryByText(/^\d+$/)).not.toBeInTheDocument();
  });

  it('shows correct number of items in cart', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        items: [
          { id: 1, quantity: 2, price: 10, title: 'Test Item' },
          { id: 2, quantity: 1, price: 20, title: 'Another Item' }
        ]
      }
    });
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('toggles cart when cart button is clicked', () => {
    const { store } = renderWithProviders(<Header />);
    const cartButton = screen.getByRole('button');
    
    fireEvent.click(cartButton);
    expect(store.getState().cart.isCartOpen).toBe(true);
    
    fireEvent.click(cartButton);
    expect(store.getState().cart.isCartOpen).toBe(false);
  });
});