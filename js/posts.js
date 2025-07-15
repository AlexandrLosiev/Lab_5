let posts = [
 {
 id: 1,
 title: 'Docker for Rails',
 created_date: '2018-11-03'
 },
 {
 id: 2,
 title: 'HTML5 for Beginners',
 created_date: '2019-01-11'
 },
 {
 id: 3,
 title: 'CSS3 for dummies',
 created_date: '2018-05-18'
 },
 {
 id: 4,
 title: 'jQuery Master',
 created_date: '2019-10-23'
 }
]

function createPostsRows(posts) {
 $('#posts').html('')
 let rowsHtml = ''
 posts.forEach(function(post){
 rowsHtml +=
`<tr><td>${post.id}</td><td>${post.title}</td><td>${post.created_date}</td></tr
>`
})
 $('#posts').html(rowsHtml)
}
createPostsRows(posts)

$('#sort-button').click(function(){
  let field = $('#sort-field').val()
  let direction = $('#sort-direction').val()

  posts.sort(function(a, b) {
    let aValue = a[field]
    let bValue = b[field]

    
    if (field === 'created_date') {
      aValue = new Date(aValue)
      bValue = new Date(bValue)
    }

    if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1
    } else if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1
    } else {
      return 0
    }
  })

  createPostsRows(posts)
})