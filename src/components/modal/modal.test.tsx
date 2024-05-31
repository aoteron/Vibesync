import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '.';
import './modal.css'
import '@testing-library/jest-dom';
  
describe('Modal Component Tests', () => {
    it('should render children content', () => {
      const mockOnOpen = jest.fn();
      render(<Modal onOpen={mockOnOpen}><div>Test Content</div></Modal>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
  
    it('should close modal on close icon click', () => {
      const mockOnOpen = jest.fn();
      render(<Modal onOpen={mockOnOpen}><div>Test Content</div></Modal>);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
      expect(mockOnOpen).toHaveBeenCalledWith(false);
    });
  });