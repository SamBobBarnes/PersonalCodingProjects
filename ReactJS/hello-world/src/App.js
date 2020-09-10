import React, { Component } from 'react'
import './App.css'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}

export default App




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Greet } from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Hello from './Components/Hello'
// import Message from './Components/Message'
// import Counter from './Components/Counter'
// import FunctionClick from './Components/FunctionClick'
// import ClassClick from './Components/ClassClick'
// import EventBind from './Components/EventBind'
// import ParentComponent from './Components/ParentComponent'
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
// import Stylesheet from './Components/Stylesheet'
// import Inline from './Components/Inline';
// import './AppStyles.css'
// import styles from './AppStyles.module.css'
// import Form from './Components/Form'
// import LifecycleA from './Components/LifecycleA'
// import FragmentDemo from './Components/FragmentDemo'
// import Table from './Components/Table'
// import ParentComp from './Components/ParentComp'
// import RefsDemo from './Components/RefsDemo'
// import FocusInput from './Components/FocusInput'
// import FRParentInput from './Components/FRParentInput'
// import PortalDemo from './Components/PortalDemo'
// import Hero from './Components/Hero'
// import ErrorBoundary from './Components/ErrorBoundary'

// function App() {
//   return (
//     <div className="App">
//       {/* <ErrorBoundary>
//         <Hero heroName='BatMan' />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName='Superman' />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName='Joker' />
//       </ErrorBoundary> */}
//       {/* <PortalDemo /> */}
//       {/* <FRParentInput /> */}
//       {/* <FocusInput /> */}
//       {/* <RefsDemo /> */}
//       {/* <ParentComp /> */}
//       {/* <Table /> */}
//       {/* <FragmentDemo /> */}
//       {/* <Form /> */}
//       {/* <LifecycleA /> */}
//       {/* <h1 className='error'>Error</h1>
//       <h1 className={styles.success}>Success</h1> */}
//       {/* <Inline /> */}
//       {/* <Stylesheet primary={true}/> */}
//       {/* <NameList /> */}
//       {/* <UserGreeting /> */}
//       {/* <ParentComponent /> */}
//       {/* <EventBind /> */}
//       {/* <ClassClick /> */}
//       {/* <FunctionClick /> */}
//       {/* <Counter /> */}
//       {/* <Message /> */}
//       {/* <Greet name='Bruce' heroName='Batman'>
//         <p>This is children props</p>
//       </Greet>
//       <Greet name='Clark' heroName='Superman'>
//         <button>Action</button>
//       </Greet>
//       <Greet name='Diana' heroName='Wonder Woman' /> */}
//       {/* <Welcome name='Bruce' heroName='Batman' /> */}
//       {/* <Welcome name='Clark' heroName='Superman' /> */}
//       {/* <Welcome name='Diana' heroName='Wonder Woman' /> */}
//       {/* <Hello /> */}
//     </div>
//   );
// }

// export default App;
