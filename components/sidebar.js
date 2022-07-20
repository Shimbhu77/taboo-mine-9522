function sidebar() {
    return `<h3> ##Refine By</h3><br />
    <div>
      <h4>Categories</h4>
      <hr>
      <p style="font-size: 16px">Shop All</p>
      <p style="font-size: 16px"><a href="New Arrival.html" style="text-decoration: none;">New Arrivals</a></p>
      <p style="font-size: 16px">Bestsellers</p>
      <select id="" aria-placeholder="Skin Care" style="border:none; font-size: 15px;">
        <option value="">Skin Care</option>
        <option value="">By Product type</option>
        <option value="">By Concern</option>
        <option value="">By Skin Type</option>
      </select><br>
      <br>
      <select id="" aria-placeholder="Hair Care" style="border:none;font-size: 15px">
        <option value="">By Product type</option>
        <option value="">By Hair Concern</option>
      </select><br><br>
      <select id="" aria-placeholder="Body Care" style="border:none;font-size: 15px">
        <option value="">Bath and Body</option>
      </select><br><br>
      <select id="" aria-placeholder="Perfumes" style="border:none;font-size: 15px">
        <option value="">All Perfumes</option>
        <option value="">Perfumes For Her</option>
        <option value="">Unisex Perfumes</option>
        <option value="">Body Perfume</option>
        <option value="">Little Luxuries</option>
        <option value="">Gift Sets</option>
      </select><br><br>
      <select id="" aria-placeholder="Combos" style="border:none;font-size: 15px">
        <option value="">All Combos</option>
        <option value="">Bestsellers Combos</option>
        <option value="">Skin Combos</option>
        <option value="">Hair Combos</option>
        <option value="">Body Combos</option>
        <option value="">Perfumes Combos</option>
        <option value="">C Glow Range</option>
        <option value="">Kumkumadi Range</option>
      </select><br>
      <p style="font-size: 16px">Build a Box</p>`
}
export { sidebar }