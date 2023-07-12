const sql = require("./db.js");

// constructor
const Product = function(product) {
    this.id = product.id;
    this.sku = product.sku;
    this.name=product.name;
    this.description=product.description;
    this.unit_price = product.unit_price;
    this.image_url = product.image_url;
    this.active = product.active;
    this.units_in_stock = product.units_in_stock;
    this.date_created = product.date_created;
    this.last_updated = product.last_updated;
    this.category_id = product.category_id;
//   this.title = product.title;
//   this.description = product.description;
//   this.published = product.published;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product (sku, name, description, unit_price, image_url, active, units_in_stock, category_id)VALUES(?,?,?,?,?,?,?,?)", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.findById = (id, result) => {
  sql.query(`SELECT * FROM product WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = (title, result) => {
  let query = "SELECT * FROM product";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("product: ", res);
    result(null, res);
  });
};

Product.getAllPublished = result => {
  sql.query("SELECT * FROM product WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("product: ", res);
    result(null, res);
  });
};

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE product SET title = ?, description = ?, published = ? WHERE id = ?",
    [product.title, product.description, product.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM product WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} product`);
    result(null, res);
  });
};

module.exports = Product;