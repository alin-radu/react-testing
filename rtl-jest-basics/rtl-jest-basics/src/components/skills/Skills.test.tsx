import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  const skillsLength = skills.length;

  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skillsLength);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('is not rendered Start Learning button', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: /start learning/i,
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('is eventually displayed Start Learning button', async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: /start learning/i,
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
