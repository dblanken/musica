import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

function ExpectInDocument(object: any, elementName: string) {
  const element = screen.getByText(object[elementName]);
  expect(element).toBeInTheDocument();
}

test('renders a card', () => {
  const cardData = {
    title: "Blah",
    url: "https://localhost",
    urlText: "Url",
    img: "./blah.jpg",
    children: <p>Hi</p>
  };

  render(
  <Card img={cardData.img} title={cardData.title} url={cardData.url} urlText={cardData.urlText}>
      {cardData.children}
  </Card>);

  ExpectInDocument(cardData, 'title');

  const urlElement = screen.getByText(cardData.urlText);
  const url = urlElement.getAttribute('href');
  expect(url).toEqual(cardData.url);

  ExpectInDocument(cardData, 'urlText');

  const imgElement = screen.getByAltText(cardData.title);
  expect(imgElement.getAttribute('src')).toEqual(cardData.img);

  const children = screen.getByText(/Hi/);
  expect(children).toBeInTheDocument();
});

