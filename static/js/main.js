// فروشگاه ساعت کرنو — منطق محصولات، سبد خرید، مقایسه و رندر صفحات

/* ---------------- داده محصولات ---------------- */
var PRODUCTS = [
  { id:1,  name:"سیکو کلاسیک ۴۰", brand:"سیکو", gender:"مردانه", category:"کلاسیک", price:4850000, oldPrice:5700000, img:"g1", material:"استیل ضدزنگ", movement:"اتوماتیک", water:"۵۰ متر", diameter:"۴۰ میلی‌متر", warranty:"۲۴ ماه گارانتی فروشگاه", desc:"ساعتی مینیمال با صفحه‌ی ساده و بند استیل، مناسب استفاده روزمره و رسمی." },
  { id:2,  name:"اورینت رویال", brand:"اورینت", gender:"مردانه", category:"لوکس", price:12900000, img:"g3", material:"استیل با روکش طلا", movement:"اتوماتیک", water:"۱۰۰ متر", diameter:"۴۲ میلی‌متر", warranty:"۳۶ ماه گارانتی فروشگاه", desc:"طراحی لوکس با جزئیات طلایی، مناسب مجالس رسمی و مراسم خاص." },
  { id:3,  name:"سیتیزن پتیت", brand:"سیتیزن", gender:"زنانه", category:"کلاسیک", price:3200000, oldPrice:3800000, img:"g6", material:"استیل ضدزنگ", movement:"کوارتز", water:"۳۰ متر", diameter:"۳۲ میلی‌متر", warranty:"۱۸ ماه گارانتی فروشگاه", desc:"ساعتی ظریف و سبک با صفحه‌ی مرواریدی، مناسب استایل روزانه زنانه." },
  { id:4,  name:"تیسو اسپرت X", brand:"تیسو", gender:"مردانه", category:"اسپرت", price:5400000, img:"g4", material:"فیبر کربن / سیلیکون", movement:"کوارتز کرنومتر", water:"۲۰۰ متر", diameter:"۴۴ میلی‌متر", warranty:"۲۴ ماه گارانتی فروشگاه", desc:"مقاوم و سبک، مناسب فعالیت‌های ورزشی و شنا با آب‌بندی بالا." },
  { id:5,  name:"کاسیو مینیمال", brand:"کاسیو", gender:"یونیسکس", category:"کلاسیک", price:2650000, img:"g2", material:"استیل / بند چرم", movement:"کوارتز", water:"۳۰ متر", diameter:"۳۶ میلی‌متر", warranty:"۱۸ ماه گارانتی فروشگاه", desc:"طراحی ساده و همه‌کاره با بند چرم قابل تعویض." },
  { id:6,  name:"سیکو هریتیج", brand:"سیکو", gender:"مردانه", category:"کلاسیک", price:6700000, oldPrice:7500000, img:"g5", material:"استیل ضدزنگ", movement:"اتوماتیک اسکلتون", water:"۵۰ متر", diameter:"۴۱ میلی‌متر", warranty:"۳۶ ماه گارانتی فروشگاه", desc:"صفحه‌ی اسکلتون با نمایش مکانیزم داخلی، برای علاقه‌مندان به ساعت‌سازی کلاسیک." },
  { id:7,  name:"سیتیزن رز گلد", brand:"سیتیزن", gender:"زنانه", category:"لوکس", price:8300000, img:"g7", material:"استیل با روکش رزگلد", movement:"کوارتز", water:"۳۰ متر", diameter:"۳۴ میلی‌متر", warranty:"۲۴ ماه گارانتی فروشگاه", desc:"ترکیب رنگ رزگلد و صفحه‌ی صدفی برای ظاهری زنانه و لوکس." },
  { id:8,  name:"اورینت دایور", brand:"اورینت", gender:"مردانه", category:"اسپرت", price:7900000, img:"g8", material:"استیل ضدزنگ", movement:"اتوماتیک", water:"۳۰۰ متر", diameter:"۴۳ میلی‌متر", warranty:"۳۶ ماه گارانتی فروشگاه", desc:"ساعت غواصی حرفه‌ای با حلقه‌ی چرخان و آب‌بندی بالا." },
  { id:9,  name:"تیسو اکو", brand:"تیسو", gender:"یونیسکس", category:"اسپرت", price:4100000, img:"g1", material:"سیلیکون / استیل", movement:"کوارتز خورشیدی", water:"۱۰۰ متر", diameter:"۳۹ میلی‌متر", warranty:"۲۴ ماه گارانتی فروشگاه", desc:"شارژ خورشیدی و بدنه‌ی سبک، مناسب سفر و فعالیت روزانه." },
  { id:10, name:"کاسیو کلاسیک لدر", brand:"کاسیو", gender:"مردانه", category:"کلاسیک", price:3450000, img:"g2", material:"بند چرم طبیعی", movement:"کوارتز", water:"۳۰ متر", diameter:"۳۸ میلی‌متر", warranty:"۱۸ ماه گارانتی فروشگاه", desc:"طراحی رسمی و اقتصادی با بند چرم دست‌دوز." },
  { id:11, name:"سیکو گرند", brand:"سیکو", gender:"مردانه", category:"لوکس", price:15800000, oldPrice:17200000, img:"g5", material:"استیل / سرامیک", movement:"اتوماتیک کرنوگراف", water:"۱۰۰ متر", diameter:"۴۳ میلی‌متر", warranty:"۳۶ ماه گارانتی فروشگاه", desc:"کرنوگراف لوکس با جزئیات سرامیکی و ماژول‌های جانبی دقیق." },
  { id:12, name:"سیتیزن دیلی", brand:"سیتیزن", gender:"زنانه", category:"اسپرت", price:2200000, img:"g6", material:"سیلیکون", movement:"کوارتز", water:"۵۰ متر", diameter:"۳۳ میلی‌متر", warranty:"۱۲ ماه گارانتی فروشگاه", desc:"سبک و رنگارنگ، مناسب استفاده روزمره و ورزش‌های سبک." }
];
var BRANDS = ["سیکو","اورینت","سیتیزن","تیسو","کاسیو"];

/* ---------------- ابزارهای عمومی ---------------- */
function formatPrice(n){ return n.toLocaleString("fa-IR"); }
function getParam(name){
  var m = new URLSearchParams(window.location.search);
  return m.get(name);
}

/* ---------------- سبد خرید (localStorage) ---------------- */
var CART_KEY = "kerono_cart";
function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; }
}
function saveCart(cart){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(e){}
  updateCartBadge();
}
function addToCart(id, qty){
  qty = qty || 1;
  var cart = getCart();
  var existing = cart.find(function(it){ return it.id === id; });
  if (existing) existing.qty += qty;
  else cart.push({ id:id, qty:qty });
  saveCart(cart);
}
function updateCartQty(id, qty){
  var cart = getCart();
  var item = cart.find(function(it){ return it.id === id; });
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}
function removeFromCart(id){
  var cart = getCart().filter(function(it){ return it.id !== id; });
  saveCart(cart);
}
function cartCount(){
  return getCart().reduce(function(sum, it){ return sum + it.qty; }, 0);
}
function updateCartBadge(){
  var el = document.querySelector("[data-cart-count]");
  if (el) el.textContent = cartCount();
}

/* ---------------- مقایسه محصولات (localStorage) ---------------- */
var COMPARE_KEY = "kerono_compare";
function getCompare(){
  try{ return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; }catch(e){ return []; }
}
function saveCompare(list){ try{ localStorage.setItem(COMPARE_KEY, JSON.stringify(list)); }catch(e){} }
function toggleCompare(id, checked){
  var list = getCompare();
  if (checked){
    if (list.indexOf(id) === -1){
      if (list.length >= 3) { list.shift(); }
      list.push(id);
    }
  } else {
    list = list.filter(function(x){ return x !== id; });
  }
  saveCompare(list);
}

/* ---------------- قطعات HTML محصول ---------------- */
function productCard(p){
  var discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  var inCompare = getCompare().indexOf(p.id) !== -1;
  return (
    '<div class="product-card" data-id="' + p.id + '" data-brand="' + p.brand + '" data-gender="' + p.gender + '" data-category="' + p.category + '" data-price="' + p.price + '">' +
      '<div class="product-thumb ' + p.img + '">' +
        (discount ? '<span class="discount-badge">' + discount + '٪ تخفیف</span>' : '') +
        '<label class="compare-chk"><input type="checkbox" class="compare-input" data-id="' + p.id + '" ' + (inCompare ? "checked" : "") + '> مقایسه</label>' +
      '</div>' +
      '<div class="product-body">' +
        '<span class="product-brand">' + p.brand + '</span>' +
        '<a href="product_detail.html?id=' + p.id + '" class="product-name">' + p.name + '</a>' +
        '<div class="product-price-row">' +
          '<span class="product-price">' + formatPrice(p.price) + ' تومان</span>' +
          (p.oldPrice ? '<span class="product-price-old">' + formatPrice(p.oldPrice) + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="product-foot">' +
        '<a href="product_detail.html?id=' + p.id + '" class="btn btn-outline btn-sm" style="flex:1;">جزئیات</a>' +
        '<button class="btn btn-primary btn-sm add-cart-btn" data-id="' + p.id + '" style="flex:1;">افزودن به سبد</button>' +
      '</div>' +
    '</div>'
  );
}

function bindProductCardEvents(root){
  root.querySelectorAll(".add-cart-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      addToCart(parseInt(btn.getAttribute("data-id"), 10), 1);
      btn.textContent = "به سبد اضافه شد ✓";
      setTimeout(function(){ btn.textContent = "افزودن به سبد"; }, 1400);
    });
  });
  root.querySelectorAll(".compare-input").forEach(function(chk){
    chk.addEventListener("change", function(){
      toggleCompare(parseInt(chk.getAttribute("data-id"), 10), chk.checked);
    });
  });
}

/* ---------------- رندر صفحه محصولات با فیلتر ---------------- */
function renderProductsPage(){
  var grid = document.querySelector("#product-grid");
  if (!grid) return;

  var brandBox = document.querySelector("#filter-brand");
  if (brandBox){
    brandBox.innerHTML = BRANDS.map(function(b){
      return '<label class="filter-opt"><input type="checkbox" value="' + b + '" class="f-brand"> ' + b + '</label>';
    }).join("");
  }

  function currentFilters(){
    var brands = Array.prototype.map.call(document.querySelectorAll(".f-brand:checked"), function(c){ return c.value; });
    var genders = Array.prototype.map.call(document.querySelectorAll(".f-gender:checked"), function(c){ return c.value; });
    var min = parseInt(document.querySelector("#price-min").value, 10) || 0;
    var max = parseInt(document.querySelector("#price-max").value, 10) || Infinity;
    return { brands:brands, genders:genders, min:min, max:max };
  }

  function applyFilters(){
    var f = currentFilters();
    var sort = document.querySelector("#sort-select") ? document.querySelector("#sort-select").value : "new";
    var list = PRODUCTS.filter(function(p){
      if (f.brands.length && f.brands.indexOf(p.brand) === -1) return false;
      if (f.genders.length && f.genders.indexOf(p.gender) === -1) return false;
      if (p.price < f.min || p.price > f.max) return false;
      return true;
    });
    if (sort === "price-asc") list.sort(function(a,b){ return a.price - b.price; });
    else if (sort === "price-desc") list.sort(function(a,b){ return b.price - a.price; });
    else if (sort === "new") list.sort(function(a,b){ return b.id - a.id; });

    grid.innerHTML = list.map(productCard).join("") || '<p class="empty-state">محصولی با این فیلترها پیدا نشد.</p>';
    bindProductCardEvents(grid);
    var countEl = document.querySelector("#result-count");
    if (countEl) countEl.textContent = list.length + " محصول";
  }

  document.querySelectorAll(".f-brand, .f-gender").forEach(function(el){
    el.addEventListener("change", applyFilters);
  });
  var sortSelect = document.querySelector("#sort-select");
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);
  var applyBtn = document.querySelector("#filter-apply-btn");
  if (applyBtn) applyBtn.addEventListener("click", applyFilters);

  /* اعمال فیلتر اولیه بر اساس query string دسته‌بندی (مثلا از صفحه اصلی) */
  var presetGender = getParam("gender");
  if (presetGender){
    setTimeout(function(){
      var chk = document.querySelector('.f-gender[value="' + presetGender + '"]');
      if (chk) { chk.checked = true; }
      applyFilters();
    }, 0);
  } else {
    applyFilters();
  }
}

/* ---------------- رندر صفحه جزئیات محصول ---------------- */
function renderProductDetail(){
  var box = document.querySelector("#product-detail");
  if (!box) return;
  var id = parseInt(getParam("id"), 10) || PRODUCTS[0].id;
  var p = PRODUCTS.find(function(x){ return x.id === id; }) || PRODUCTS[0];

  document.title = p.name + " | فروشگاه ساعت کرنو";
  box.innerHTML =
    '<div class="detail-image ' + p.img + '"></div>' +
    '<div>' +
      '<div class="breadcrumb"><a href="index.html">خانه</a> / <a href="products.html">محصولات</a> / ' + p.name + '</div>' +
      '<span class="detail-brand">' + p.brand + '</span>' +
      '<h1 class="detail-title">' + p.name + '</h1>' +
      '<div class="detail-price-row"><span class="detail-price">' + formatPrice(p.price) + ' تومان</span>' +
      (p.oldPrice ? '<span class="detail-price-old">' + formatPrice(p.oldPrice) + ' تومان</span>' : '') + '</div>' +
      '<p class="detail-desc">' + p.desc + '</p>' +
      '<div class="detail-actions">' +
        '<div class="qty-stepper">' +
          '<button type="button" id="qty-minus">−</button>' +
          '<input type="text" id="qty-input" value="1" readonly>' +
          '<button type="button" id="qty-plus">+</button>' +
        '</div>' +
        '<button class="btn btn-primary" id="detail-add-cart">افزودن به سبد خرید</button>' +
      '</div>' +
      '<table class="spec-table">' +
        '<tr><td>جنسیت</td><td>' + p.gender + '</td></tr>' +
        '<tr><td>دسته‌بندی</td><td>' + p.category + '</td></tr>' +
        '<tr><td>جنس بدنه</td><td>' + p.material + '</td></tr>' +
        '<tr><td>موتور ساعت</td><td>' + p.movement + '</td></tr>' +
        '<tr><td>مقاومت در برابر آب</td><td>' + p.water + '</td></tr>' +
        '<tr><td>قطر صفحه</td><td>' + p.diameter + '</td></tr>' +
        '<tr><td>گارانتی</td><td>' + p.warranty + '</td></tr>' +
      '</table>' +
    '</div>';

  var qtyInput = document.querySelector("#qty-input");
  document.querySelector("#qty-minus").addEventListener("click", function(){
    qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
  });
  document.querySelector("#qty-plus").addEventListener("click", function(){
    qtyInput.value = parseInt(qtyInput.value, 10) + 1;
  });
  document.querySelector("#detail-add-cart").addEventListener("click", function(btnEvent){
    addToCart(p.id, parseInt(qtyInput.value, 10));
    var btn = btnEvent.currentTarget;
    btn.textContent = "به سبد اضافه شد ✓";
    setTimeout(function(){ btn.textContent = "افزودن به سبد خرید"; }, 1600);
  });

  var relatedBox = document.querySelector("#related-products");
  if (relatedBox){
    var related = PRODUCTS.filter(function(x){ return x.category === p.category && x.id !== p.id; }).slice(0, 3);
    relatedBox.innerHTML = related.map(productCard).join("");
    bindProductCardEvents(relatedBox);
  }
}

/* ---------------- رندر سبد خرید ---------------- */
function renderCartPage(){
  var box = document.querySelector("#cart-box");
  if (!box) return;
  var cart = getCart();

  if (!cart.length){
    box.innerHTML = '<div class="cart-empty"><h3>سبد خرید شما خالی است</h3><p style="margin:10px 0 20px;">محصولی برای نمایش وجود ندارد.</p><a href="products.html" class="btn btn-primary">مشاهده محصولات</a></div>';
    var summary = document.querySelector("#cart-summary");
    if (summary) summary.style.display = "none";
    var layoutEmpty = document.querySelector("#cart-layout");
    if (layoutEmpty) layoutEmpty.classList.add("is-empty");
    return;
  }

  var rows = cart.map(function(item){
    var p = PRODUCTS.find(function(x){ return x.id === item.id; });
    if (!p) return "";
    return (
      '<tr data-id="' + p.id + '">' +
        '<td><div class="cart-item-info"><div class="cart-thumb ' + p.img + '"></div><div><b>' + p.name + '</b><br><span>' + p.brand + '</span></div></div></td>' +
        '<td>' + formatPrice(p.price) + ' تومان</td>' +
        '<td><div class="qty-stepper"><button type="button" class="qty-m" data-id="' + p.id + '">−</button><input type="text" value="' + item.qty + '" readonly><button type="button" class="qty-p" data-id="' + p.id + '">+</button></div></td>' +
        '<td>' + formatPrice(p.price * item.qty) + ' تومان</td>' +
        '<td><button class="remove-link" data-id="' + p.id + '">حذف</button></td>' +
      '</tr>'
    );
  }).join("");

  box.innerHTML =
    '<table class="cart-table"><thead><tr><th>محصول</th><th>قیمت واحد</th><th>تعداد</th><th>جمع</th><th></th></tr></thead><tbody>' + rows + '</tbody></table>';

  box.querySelectorAll(".qty-m").forEach(function(b){
    b.addEventListener("click", function(){
      var id = parseInt(b.getAttribute("data-id"), 10);
      var item = getCart().find(function(x){ return x.id === id; });
      updateCartQty(id, item.qty - 1 < 1 ? 1 : item.qty - 1);
      renderCartPage();
    });
  });
  box.querySelectorAll(".qty-p").forEach(function(b){
    b.addEventListener("click", function(){
      var id = parseInt(b.getAttribute("data-id"), 10);
      var item = getCart().find(function(x){ return x.id === id; });
      updateCartQty(id, item.qty + 1);
      renderCartPage();
    });
  });
  box.querySelectorAll(".remove-link").forEach(function(b){
    b.addEventListener("click", function(){
      removeFromCart(parseInt(b.getAttribute("data-id"), 10));
      renderCartPage();
    });
  });

  renderCartSummary();
}

function cartSubtotal(){
  return getCart().reduce(function(sum, item){
    var p = PRODUCTS.find(function(x){ return x.id === item.id; });
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCartSummary(){
  var summary = document.querySelector("#cart-summary");
  if (!summary) return;
  summary.style.display = "";
  var subtotal = cartSubtotal();
  var shipping = subtotal > 0 ? 65000 : 0;
  var discount = window._appliedDiscount || 0;
  var total = Math.max(0, subtotal + shipping - discount);
  summary.querySelector("#sum-subtotal").textContent = formatPrice(subtotal) + " تومان";
  summary.querySelector("#sum-shipping").textContent = formatPrice(shipping) + " تومان";
  summary.querySelector("#sum-discount").textContent = discount ? "−" + formatPrice(discount) + " تومان" : "۰ تومان";
  summary.querySelector("#sum-total").textContent = formatPrice(total) + " تومان";
}

function bindCouponForm(){
  var couponBtn = document.querySelector("#apply-coupon");
  if (!couponBtn) return;
  couponBtn.addEventListener("click", function(){
    var code = document.querySelector("#coupon-input").value.trim();
    var msg = document.querySelector("#coupon-msg");
    if (code.toUpperCase() === "KERONO10"){
      window._appliedDiscount = Math.round(cartSubtotal() * 0.1);
      msg.textContent = "کد تخفیف با موفقیت اعمال شد (۱۰٪ تخفیف).";
      msg.style.color = "var(--success)";
    } else {
      window._appliedDiscount = 0;
      msg.textContent = "کد تخفیف نامعتبر است.";
      msg.style.color = "var(--rust)";
    }
    renderCartSummary();
  });
}

/* ---------------- رندر صفحه تسویه‌حساب ---------------- */
function renderCheckoutPage(){
  var box = document.querySelector("#checkout-summary");
  if (!box) return;
  var cart = getCart();
  var subtotal = cartSubtotal();
  var shipping = subtotal > 0 ? 65000 : 0;
  var total = subtotal + shipping;

  box.innerHTML =
    cart.map(function(item){
      var p = PRODUCTS.find(function(x){ return x.id === item.id; });
      if (!p) return "";
      return '<div class="summary-row"><span>' + p.name + ' × ' + item.qty + '</span><span>' + formatPrice(p.price * item.qty) + ' تومان</span></div>';
    }).join("") +
    '<div class="summary-row"><span>هزینه ارسال</span><span>' + formatPrice(shipping) + ' تومان</span></div>' +
    '<div class="summary-row total"><span>مبلغ قابل پرداخت</span><span>' + formatPrice(total) + ' تومان</span></div>';

  var form = document.querySelector("#checkout-form");
  if (!form) return;

  document.querySelectorAll(".pay-option").forEach(function(opt){
    opt.addEventListener("click", function(){
      document.querySelectorAll(".pay-option").forEach(function(o){ o.classList.remove("active-pay"); });
      opt.classList.add("active-pay");
      opt.querySelector("input").checked = true;
    });
  });

  form.addEventListener("submit", function(e){
    e.preventDefault();
    var ok = true;
    form.querySelectorAll("[required]").forEach(function(input){
      var field = input.closest(".field");
      if (!field) return;
      if (!input.value.trim()){ field.classList.add("invalid"); ok = false; }
      else field.classList.remove("invalid");
    });
    var phoneInput = form.querySelector("#co-phone");
    if (phoneInput && phoneInput.value && !/^0?9\d{9}$/.test(phoneInput.value.replace(/\s/g, ""))){
      phoneInput.closest(".field").classList.add("invalid");
      ok = false;
    }
    if (!ok) return;

    var orderCode = "KR-" + Math.floor(100000 + Math.random() * 900000);
    document.querySelector("#order-code-text").textContent = orderCode;
    document.querySelector("#checkout-view").style.display = "none";
    document.querySelector("#order-success").classList.add("show");
    saveCart([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------- رندر صفحه مقایسه ---------------- */
function renderComparePage(){
  var box = document.querySelector("#compare-box");
  if (!box) return;
  var ids = getCompare();
  var list = PRODUCTS.filter(function(p){ return ids.indexOf(p.id) !== -1; });

  if (!list.length){
    box.innerHTML = '<div class="empty-state"><h3>هنوز محصولی برای مقایسه انتخاب نکردید</h3><p style="margin:10px 0 20px;">از صفحه محصولات، گزینه «مقایسه» رو روی حداکثر ۳ محصول فعال کنید.</p><a href="products.html" class="btn btn-primary">مشاهده محصولات</a></div>';
    return;
  }

  function row(label, key){
    return '<tr><td>' + label + '</td>' + list.map(function(p){ return '<td>' + p[key] + '</td>'; }).join("") + '</tr>';
  }

  box.innerHTML =
    '<table class="compare-table">' +
      '<thead><tr><th></th>' + list.map(function(p){
        return '<th><div class="compare-prod-thumb ' + p.img + '"></div><div style="font-weight:900;">' + p.name + '</div><div style="color:var(--tan);font-size:12px;">' + p.brand + '</div>' +
          '<button class="btn btn-sm btn-outline" style="margin-top:10px;" onclick="toggleCompare(' + p.id + ', false); renderComparePage();">حذف</button></th>';
      }).join("") + '</tr></thead>' +
      '<tbody>' +
        '<tr><td>قیمت</td>' + list.map(function(p){ return '<td><b style="color:var(--brown-deep);">' + formatPrice(p.price) + ' تومان</b></td>'; }).join("") + '</tr>' +
        row("جنسیت", "gender") +
        row("دسته‌بندی", "category") +
        row("جنس بدنه", "material") +
        row("موتور ساعت", "movement") +
        row("مقاومت در برابر آب", "water") +
        row("قطر صفحه", "diameter") +
        row("گارانتی", "warranty") +
      '</tbody>' +
    '</table>' +
    '<div class="text-center" style="margin-top:24px;"><a href="products.html" class="btn btn-ghost">افزودن محصول بیشتر برای مقایسه</a></div>';
}

/* ---------------- رندر محصولات پرفروش صفحه اصلی ---------------- */
function renderFeaturedGrid(selector, ids){
  var grid = document.querySelector(selector);
  if (!grid) return;
  var list = ids ? PRODUCTS.filter(function(p){ return ids.indexOf(p.id) !== -1; }) : PRODUCTS.slice(0, 4);
  grid.innerHTML = list.map(productCard).join("");
  bindProductCardEvents(grid);
}

/* ---------------- راه‌اندازی مشترک صفحات ---------------- */
document.addEventListener("DOMContentLoaded", function () {

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", function(){ links.classList.toggle("open"); });

  var current = document.body.getAttribute("data-page");
  if (current){
    document.querySelectorAll(".nav-links a").forEach(function(a){
      if (a.getAttribute("data-nav") === current) a.classList.add("active");
    });
  }

  updateCartBadge();
  renderProductsPage();
  renderProductDetail();
  renderCartPage();
  renderCheckoutPage();
  renderComparePage();
  bindCouponForm();
  renderFeaturedGrid("#bestseller-grid", [2, 4, 6, 8]);
  renderFeaturedGrid("#newarrival-grid", [9, 10, 11, 12]);
});
