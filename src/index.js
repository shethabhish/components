import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './CommentDetail';
import faker from 'faker';
import Approval from './approval';

const App = () => {
  return (
    <div className="ui container comments">
      <Approval>
        <Comment
          author="Sam"
          date="Today at 6:00pm"
          text="Whatsup!"
          avatar={faker.image.avatar()}
        />
      </Approval>

      <Approval>
        <Comment
          author="Kartheek"
          date="Yesterday at 1:00pm"
          text="How are you?"
          avatar={faker.image.avatar()}
        />
      </Approval>

      <Approval>
        <Comment
          author="Arun"
          date="On 1/1/2019"
          text="Hey there!"
          avatar={faker.image.avatar()}
        />
      </Approval>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
