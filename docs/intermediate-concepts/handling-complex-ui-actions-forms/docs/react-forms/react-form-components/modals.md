Modals tend not to be best practice for ui-ux and form security. It is better to have links and routing to take the user through the steps of filling in a form.

**Steps to create a reusable component with the React Modal Library**

Documentation [https://www.npmjs.com/package/react-modal]
GitHub[https://github.com/reactjs/react-modal]
The easiest to follow [https://reactcommunity.org/react-modal/]
Good resources[https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6]

Reusable component is in [src/components/modals/PopUpModalComponent.js]

Set-up:

1. Install the library `npm i -D react-modal`
2. Create a class component - `rce` & ``rconst` snippets
3. Import the library `import ReactModal from 'react-modal'`
4. Set the app to a reference element in the DOM tree `ReactModal.setAppElement('body');` See error handling [https://reactjs.org/warnings/unknown-prop.html]

Design: 5. Decide what the ui-state is going to be and add your state object (make a small design on paper)

Logic 6. Ensure you have a boolean value for the open/ close state of the modal `isModalOpen` for example 7. Set up a model/open close utility function so that you have an on click to open the modal and set state here to update the value to use in your render method.

```
openModal = () => {
        console.log("this is:", this);
        this.setState((state) => ({
            // set state to the opposite of false which is true
            modalIsOpen: !state.modalIsOpen,
        }));
        console.log('openmodal:', this.state)
    };
```

8. If there are props you can also write factory functions for the props

   ` onAfterOpen={handleAfterOpenFunc/* Function that will be run after the modal has opened. */}`
   `onAfterClose={handleAfterCloseFunc/* Function that will be run after the modal has closed. */}`

9. Between the custom `ReactModal` wrapper design the content of the modal

```
{ children
    <h1 id="heading">Alert</h1>
        <div id="full_description">
            <p>Description goes here.</p>
        </div>
}
```

10. Define the propTypes to keep the imports of this reusable component type-checked

11. Style as required in `src/components/styles/modalStyles.css` - the animation of the repo ease-in/out or slide-in/out can be written here

12. Create sample modals to see that the reusable modal works - examples in this repo are FeebackModal/LoginModal/RegistrationFormModal

13. You can now use the Modal in other projects

14. Remember the modal style are dependent on using both the reusable component and the style sheet - the modal can be a side-slider that is the animation css written. The modal in this repo is a simple pop-up
