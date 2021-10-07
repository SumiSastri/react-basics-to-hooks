Plural Sight: React the Big Picture : Cory House

**Concise vs. Explicit**

React trades conciseness for predictability and explicitness. You spend a little more time explicitly wiring things up together, but that helps them not fall apart. And it also helps people better understand what the code is doing.

Frameworks like Knockout and Angular popularized two‑way binding as a way to avoid typing by automatically keeping form inputs in sync with the underlying data. This approach was extremely popular until React came along. It was popular because it requires less coding. With two‑way binding, JavaScript values and inputs are automatically kept in sync.

In contrast, React embraces one‑way binding instead. It requires a little more code. With React, you declare an explicit change handler, and you reference it on your input. This extra work has some benefits. You have more control because you can declare precisely what should happen on every event. This means you can transform and validate input before updating state and perform performance optimizations as desired. Your code is more explicit since you clearly state what you want to happen when an event occurs. And this makes it easy to understand and debug when an error happens.

Although React helped repopularize doing one‑way binding, other popular libraries like Angular have shifted gears and embrace it as well today for these reasons. Now, if your team strongly prefers two‑way binding, you can use libraries that add it to React, but for the reasons I just mentioned, few do so, and I don't recommend it. Also, don't worry. You don't need to declare a separate change handler for each input. There are simple patterns for centralizing your change handlers in React, as I show in my other React courses. So in the real world, the amount of code that you write in React isn't substantially larger because of one‑way binding because you typically have a single change handler for an entire form. In summary, here's the trade‑off. React requires more typing to implement than traditional two‑way binding approaches, but with the benefit of easier maintenance, greater clarity, reliability, and performance.
