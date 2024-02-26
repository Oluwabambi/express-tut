const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.redirect("/blogs");
  // const blogs = [
  //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  // ]
  // res.sendFile('./views/index.html', { root: __dirname })
  // res.render('index', { title: 'Home', blogs })
});

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById("65cba5bd4c2671a02f59169c")
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     })
    
// app.get("/about", (req, res) => {
//     //   res.sendFile("./views/index.html", { root: __dirname });
//     res.render('about', { title: 'About' });
// });

// // redirects
// app.get("/about-us", (req, res) => {
//   res.redirect('/about', { title: 'About' });
// });

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new blog 3',
//       snippet: 'about my new blog',
//       body: 'more about my new blog'
//     });
    
//     blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   })

// router.get("/create", (req, res) => {
//   //   res.sendFile("./views/index.html", { root: __dirname });
//   res.render("create", { title: "Create a new Blog" });
// });

// 404 page
app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render('404', { title: '404' });
});