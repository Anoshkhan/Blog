const articles = [
    {
        name: "learn-react",
        title: "The fastest way to learn React",
        thumbnail: "/images/react.png",
        content: [`React is a declarative library, while JavaScript is an imperative programming
        language. That means learning React after learning JavaScript requires a bit of a shift
        in thinking, because they're almost opposite paradigms.`,
        `When I was learning React some years ago, I didn't even know I was doing imperative stuff
        on my React projects for my portfolio. In one job interview, the interviewer himself 
        pointed it out and told me how it's supposed to be done in React.
        Bless his kind soul.`,
        `I didn't have time to correct my code, but I kept what he said in mind. In another 
        interview at another company, the interviewer pointed out the same section in my code.
        He asked me what I think I did wrong. Because I remembered what the first interviewer 
        said, I was able to answer this question correctly. The whole interview was more engaging
        because I could talk more about my code and how to improve it.`,
        `You know what they all say in the learn-to-code space - don't get stuck in tutorial hell.
        And the only way to get out of tutorial hell is to work on your own projects to apply what
        you've learned from those tutorials.

        If you're having a hard time with your own projects, maybe they're too big. Start small, 
        and then work your way up to more complicated projects.`,
     ],
    },
    {
        name: "learn-node",
        title: "Make a first Node Js server",
        thumbnail: "/images/node.png",
        content: [`Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

        Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
        
        A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
        
        When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.
        
        This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
        
        Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
        
        In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.`,
     ],
    },
    {
        name: "Flutter",
        title: "Get started with flutter",
        thumbnail: "/images/flutter.jpg",
        content: [` Flutter is Google's UI toolkit for building beautiful, natively compiled 
        applications for mobile, web, and desktop from a single codebase. Flutter works with 
        existing code, is used by developers and organizations around the world, and is free 
        and open source.
        In this codelab, you'll create a simple mobile Flutter app. If you're familiar with 
        object-oriented code and basic programming concepts—such as variables, loops, and 
        conditionals—then you can complete the codelab. You don't need previous experience with
        Dart, mobile, desktop, or web programming.When building complex apps, choosing the correct app architecture is crucial, as it allows you to structure your code and support your codebase as it grows.

        Good architecture should help you handle complexity without getting on the way. But it's not always easy to get it right:
        
        The absence of it creates an overall lack of organization in your code
        The excess use of it leads to over-engineering, making it hard to make even simple changes
        In practice, things can be quite nuanced and it takes some practice and experience to get the right balance.
        
        So in this article, I will introduce a reference architecture based on the Riverpod package that is very well suited for Flutter app development.
        
        And I'll also offer a comparison with other popular architectures, as I have borrowed many concepts and ideas from them.If you research this topic, you may come across terms such as MVC, MVP, MVVM, and Clean Architecture. These are popular app architectures that were introduced long ago to solve similar problems to the ones we face today with Flutter.`,
     ],
    },
]
export default articles;