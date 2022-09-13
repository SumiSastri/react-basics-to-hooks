A variation on traditional CSS stylesheets called CSS Modules. 

It feels a lot like traditional style sheets, you get to write CSS, it's in a .css file, but there's an essential difference. The style sheet is a module.

 Through a CSS build step done with a tool called a module bundler, such as webpack, it will generate an export object. 
 
 This object is importable, allowing you to explicitly define your style dependencies. The selectors are available there on the export object, and are referenced when used in the React component's className props. 
 
 The other game‑changing difference in this CSS is that the selector names are also made to be unique in that same CSS build step. The selectors become hashed, so that even though technically they still exist in a global namespace, there is no danger of name collision. 
 
 You don't have to use naming conventions like BEM to attempt to keep your component classes separate. You can name the selectors whatever makes sense for that component CSS module only. 
 
 It doesn't have to be globally unique. Other modules could use the exact same selector name, and because of the additional hashing, when the final selectors are generated, they would be different, specific to the module they're used in. This seems like we get to keep the power of CSS and avoid some of the pitfalls. 
 
 Selectors become isolated, specific to our components, and avoiding the global namespace. We get explicit dependencies, importing only the styles we use into our component code. That means we can also eliminate unused dead code from our style sheets. Since the selector names are also generated, we can minify our selectors as well. 
 
 One thing we still don't get is a good way to share constants. We still have the JS‑to‑CSS language divide in this approach. So it looks like if you want to author CSS in stylesheets and have a much more manageable CSS environment, CSS modules are a good choice to make. 
 
 file path is `.module.css`
 Import is `import css from "./nameofFile.module.css"`
 Set with a dynamic string in the className props of JSX `className={css.navbar}`
 The rest of the css is similar to vanilla css