function extract_product_data() {
  let extracted_data = ""
  let catalog = document.getElementsByClassName("catalog_container")[0]
  let catalog_rows = catalog.getElementsByClassName("catalog_cont_row")

  for (let row_number = 0; row_number < catalog_rows.length; row_number++) {
    let product = catalog_rows[row_number].getElementsByClassName("product")
    for (let product_number = 0; product_number < product.length; product_number++) {
      let product_child_el = product[product_number].children[0] // продукт имеет только один child элемент
      let product_name_el = product_child_el.getElementsByClassName("product_item_name")[0] // такой элемент только один
      let product_bottom_el = product_child_el.getElementsByClassName("product_item_bottom")[0] // такой элемент тоже только один
      let product_price_el = product_bottom_el.getElementsByClassName("product_item__price")[0] // аналогично строкам выше
      
      let product_name_text = product_name_el.innerText
      let product_price_text = product_price_el.innerText
      
      let product_name = product_name_text.split("\n\n")[0]
      let product_vol = product_name_text.split("\n\n")[1].split(",")[0].split(" ")[0]
      let product_alco = "0"
      if (product_name_text.split("\n\n")[1].split(",").length == 2) {
        console.log("found non-alcohol product!")
      } else {
        let product_alco_unformatted = product_name_text.split("\n\n")[1].split(",")[2]
        product_alco = product_alco_unformatted.slice(1, product_alco_unformatted.length - 1)
      }
      let product_price = product_price_text.split(" ")[0]
      
      extracted_data += product_name + "|" + product_vol + "|" + product_alco + "|" + product_price + "\n"
    }
  }
  return extracted_data
}
