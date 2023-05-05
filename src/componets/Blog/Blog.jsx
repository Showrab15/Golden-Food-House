import React from 'react';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {
  return (
    <div>
      <div className='text-center mt-10'>
        <Pdf targetRef={ref} filename="blog-question-assignment10-showrab">
          {({ toPdf }) => <button className='button' onClick={toPdf}>Download  Pdf</button>}
        </Pdf>
      </div>

      <div>
        <section ref={ref} className="mt-8 mb-8 w-[50%] mx-auto">
          <h1 className="text-3xl font-bold text-center">Blog Question Answer</h1>
          <hr  className="long-line"/>
          <hr className="short-line mb-8"/>
          <h1 className='text-2xl font-bold'>  1. Tell us the differences between uncontrolled and controlled components</h1>
          <p className="font-semibold">Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
          <h1 className='text-2xl font-bold'>  2. How to validate React props using PropTypes ?
          </h1>
          <p className="font-semibold"> Ans:


            Import the PropTypes library in your component using import PropTypes from 'prop-types'; Then Define the expected data types for your props using the propTypes object inside your component. Specify the data type for each prop using PropTypes, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. Must be Assign the propTypes object to your component using the MyComponent.propTypes syntax.</p>

          <h1 className='text-2xl font-bold'>  3. Tell us the difference between nodejs and express js?</h1>
          <p className="font-semibold">Ans: js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>

          <h1 className='text-2xl font-bold'>   4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="font-semibold">Ans: Custom hooks allow you to extract and reuse stateful logic from components, reducing duplication and keeping your code more modular and easier to maintain.Custom hooks are created by defining a function that uses the built-in React hooks like useState, useEffect, useContext, etc., and returns some state or behavior that can be used by components.</p>


        </section>


      </div>
    </div>
  );
};

export default Blog;

