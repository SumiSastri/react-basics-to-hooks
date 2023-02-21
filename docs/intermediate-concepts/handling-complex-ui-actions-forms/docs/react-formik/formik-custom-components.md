## Advantages of creating custom inputs and components with Formik

1. Increases code resuability
2. User Experience - consistent look and feel
3. Unique fields - star based rating that is not available with standard JSX inputs
4. Creates your own component library with ui-ux determined by the use-case (business requirements)

## How to add Formik and create a Form page with a reusable form Input

Formik ships with the `useField()` to create custom fields

1. Create a container component - tests all other components - a simple formik wrapper component
2. Create a controlled component with a switch statement that controls form input behaviour - it also renders it based on behaviours
3. Create individual input types
4. Import those input types into the form you are creating
