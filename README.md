
## Provide an example of using union and intersection types in TypeScript. --*

## Union type মানে একটি variable একাধিক type নিতে পারে 
![Logo](/src/images/code.png)

## Intersection type মানে একটি variable দুই বা তার বেশি type এর সব properties রাখতে পারে।
![Logo](/src/images/code2.png)

## What are some differences between interfaces and types in TypeScript? --*

-- TypeScript এ Interface এবং Type এর ব্যবহার

---Object, Function, Array define করার জন্য Interface এবং Type ব্যবহার করা হয়।

1. Intersection type করার ক্ষেত্রে:

-> Type দিয়ে করলে দুইটি type কে & দিয়ে combine করতে হবে।

2. Interface দিয়ে করতে চাইলে extends keyword ব্যবহার করতে হয়।

-> Function বা String define করার ক্ষেত্রে:

3. Interface দিয়ে code structure কিছুটা জটিল হয়ে যায়।

-> Type দিয়ে করা অনেক সহজ এবং readable হয়।

4. Primitive type define করার ক্ষেত্রে:

-> Interface ব্যবহার করা যায় না কারণ = operator ব্যবহার করতে হয়, যা interface করা যায় না।

5. Object type define করার ক্ষেত্রে:

-> Interface ব্যবহার করা অনেক সহজ এবং সুবিধাজনক।