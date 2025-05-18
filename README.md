

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## Cache : search functionality
time complexity to search in array = O(n)
time complexity to search in Object = O(1) 

array.indexOf(),array.includes()  <-- O(n)

new Map(); <-- optimize method to search in Object


 for big data handle - limit caching -  only [100]
        - delete from top and push new obj in caching
