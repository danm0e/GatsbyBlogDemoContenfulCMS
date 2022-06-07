Pages folder uses the new Gatsby filesystem route api

So Gatsby checks for curly braces in file names it will query the pages and generate the routing based on the naming.

i.e `{query.prop}.js` so `{contentfulPage.slug}.js`
