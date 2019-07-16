<template>
  <Layout>
    <div class="container">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

      <div class="store-header">
        <h1 class="store-title">Store</h1>
        
        <!-- STORE PRODUCT ITEMS GRID -->
        <section class="products">
          <ProductPreview 
            v-for="edge in $page.allProduct.edges" :key="edge.node.id"
            :product="edge.node" class="product" />
        </section>
        <Pager :info="$page.allProduct.pageInfo" class="product-navigation" />

        <!-- <div class="collection">
          <div class="product">
            <a class="product__image" href="#"></a>
            <div class="product__name">
              <p>
                <a href="#">Product Name</a>
              </p>
            </div>
            <div class="product__price">
              <p>$10.00</p>
            </div>
          </div>
          <div class="product">
            <a class="product__image" href="#"></a>
            <div class="product__name">
              <p>
                <a href="#">Product Name</a>
              </p>
            </div>
            <div class="product__price">
              <p>$10.00 </p> 
            </div>
          </div>
          <div class="product">
            <a class="product__image" href="#"></a>
            <div class="product__name">
              <p>
                <a href="#">Product Name</a>
              </p>
            </div>
            <div class="product__price">
              <p>$10.00 </p>  
            </div>
          </div>
          <div class="product">
            <a class="product__image" href="#"></a>
            <div class="product__name">
              <p>
                <a href="#">Product Name</a>
              </p>
            </div>
            <div class="product__price">
              <p>$10.00  </p>
            </div>
          </div>
          <div class="product">
            <a class="product__image" href="#"></a>
            <div class="product__name">
              <p>
                <a href="#">Product Name</a>
              </p>
            </div>
            <div class="product__price">
              <p>$10.00  </p>
            </div>
          </div>
        </div> -->
      </div>

    </div>
  </Layout>
</template>


<style>
.product-navigation {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
}
.product-navigation a {
  box-sizing: border-box;
  width: 2em;
  background-color: #E3E3E3;
  color: black;
  font-weight: bold;
  margin: .5em;
  text-align: center;
  text-decoration: none;
  border-radius: .2em;
}
.product-navigation a.active {
  font-weight: normal;
  background-color: hsla(152, 65%, 80%, 1);
}
.products {
  display: flex;
  flex-wrap: wrap;
}
.products figure, .products img {
  width: 100%;
  margin: 0;
}
.products a {
  color: inherit;
}
.products .product {
  display: block;
  width: 10em;
  margin: 1em;
}
.product button {
  width: 100%;
}

/* STORE CSS GRID STYLINGS */
.collection {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px auto;
  max-width: 800px;
}

@media only screen and (max-width: 666px) {
  .collection {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  margin: 60px auto;
  max-width: 800px;
}
}

.product__image {
  background-color: #e5e5e5;
  display: block;
  min-height: 200px;
  width: 100%;
}
.product__name p {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.product__name p a {
  color: #000000;
  text-decoration: none;
}
.product__price p {
  font-family: sans-serif;
  font-size: 14px;
}


</style>


<script>
import { Pager } from 'gridsome'
import ProductPreview from '../components/ProductPreview'
export default {
    components: {
        Pager,
        ProductPreview,
    },
    metaInfo: {
      titleTemplate: "It's Obinna Store"
    }
};
</script>

<page-query>
query Products($page: Int) {
  allProduct (perPage: 6, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node{
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
  }
}
</page-query>
