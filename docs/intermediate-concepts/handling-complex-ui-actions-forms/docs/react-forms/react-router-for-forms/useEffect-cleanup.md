[https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24]

The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new AbortController object using the `AbortController()` constructor. Communicating with a DOM request is done using an `AbortSignal{}`, which is an object.

`AbortController.signal` a read-only object, returns an AbortSignal object instance, which can be used to communicate with, or to abort, a DOM request.

`AbortController.abort()` Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams.

Note: When `abort()` is called, the `fetch()` promise rejects with a DOMException named AbortError.

DOM documentation [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model]
