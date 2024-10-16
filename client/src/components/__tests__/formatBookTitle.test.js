import { formatBookTitle } from './BookForm'; 

describe('formatBookTitle', () => {
  test('capitalizes the first letter of each word', () => {
    const title = 'the great gatsby';
    const formattedTitle = formatBookTitle(title);
    expect(formattedTitle).toBe('The Great Gatsby');
  });

  test('trims excess spaces and capitalizes', () => {
    const title = '   moby dick   ';
    const formattedTitle = formatBookTitle(title);
    expect(formattedTitle).toBe('Moby Dick');
  });

  test('returns an empty string for empty input', () => {
    const formattedTitle = formatBookTitle('');
    expect(formattedTitle).toBe('');
  });
});