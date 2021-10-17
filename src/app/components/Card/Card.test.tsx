import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card } from './Card';
import { MovieResponse } from 'app/types/movie';

describe('Display Card', () => {
  it('Should show card', () => {
    const movie: MovieResponse = {
      userId: 40,
      like: 56,
      dislike: 66,
      url: 'https://www.youtube.com/watch?v=4LPDJWZiBgc',
      createdAt: new Date(),
      title: 'title test',
      description: 'description test',
      userName: 'phuythanh@gmail.com',
      youtubeId: '4LPDJWZiBgc',
      id: 1,
    };
    const { getByText } = render(<Card movie={movie} />);

    expect(getByText('title test')).toBeInTheDocument();
    expect(getByText('description test')).toBeInTheDocument();
  });

  it('Should show card with truncate description', () => {
    const movie: MovieResponse = {
      userId: 40,
      like: 56,
      dislike: 66,
      url: 'https://www.youtube.com/watch?v=4LPDJWZiBgc',
      createdAt: new Date(),
      title: 'title test',
      description: `This series will cover the relationship between React, TypeScript, and TDD, as well as the features JetBrains IDEs offer for working with them. In these videos, I show a little about a lot. We’ll take a look at the key steps to becoming comfortable with using the IDE for React projects with TypeScript. Along the way, I’ll demonstrate test-driven development and provide you with loads of tips and tricks you can use in your IDE.`,
      userName: 'phuythanh@gmail.com',
      youtubeId: '4LPDJWZiBgc',
      id: 1,
    };
    const { getByText } = render(<Card movie={movie} />);

    expect(getByText('title test')).toBeInTheDocument();
    expect(
      getByText(
        'This series will cover the relationship between React, TypeScript, and TDD, as well as the features JetBrains IDEs offer for working with them. In these videos, I show a little about a lot. We’ll take...'
      )
    ).toBeInTheDocument();
  });
});
