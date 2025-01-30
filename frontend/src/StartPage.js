import React from 'react';

const data = {
    title: 'S&P 500 Data',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
}

export default function StartPage() {
    return (
      <>
        <h1>{data.title}</h1>
        <img
          className="avatar"
          src={data.imageUrl}
          alt={'Photo of ' + data.title}
          style={{
            width: data.imageSize,
            height: data.imageSize
          }}
        />
      </>
    );
}
  