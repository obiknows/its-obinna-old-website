<page-query>
query Product ($path: String!) {
  product(path: $path) {
    id,
    title,
    path,
    price,
    content,
    picture {
      thumbnails {
          large{
          url
        }
      }
    }
  }
}
</page-query>