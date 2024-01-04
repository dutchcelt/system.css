# system.css

A base stylesheet using system colors and css keywords.

## Demo

https://dutchcelt.github.io/system.css/

## Goals

System.css has a number of goals:

1. Provide a default style for basic html pages.
2. Provide the means to style the default using custom properties
3. No dependencies
4. Based on system colors and CSS keywords. The browser has defaults, so lets use those.

Additionally, `system.css` also provides a simple form layout and validation setup.

### Compatibility

This solution uses features that might cause issues. Consider the following:  
CSS nesting, Sub Grid, `color-mix()`, `:has()`, `@property`, and `@layer`.

These features work in following browsers:

-   Chrome 117+
-   Safari 16.5+
-   Firefox 124+

### Acknowledgments

This is a heavily modified version of [new.css](https://newcss.net)

For fonts we use what we are given by the OS. My thanks to [Modern Font Stacks](https://modernfontstacks.com).

#### Inspiration

My admiration and recommendations to consider are

-   [water.css](https://watercss.kognise.dev)
-   [pico.css](https://picocss.com)
-   [simple.css](https://simplecss.org)
