# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640px ve 1024px seçtim?**
  640px, büyük telefonlar ile tabletlerin ayrıştığı doğal kırılım noktasıdır; bu noktada içerik akışı (hakkımda bölümü, nav) dikey → yatay düzene geçiş yapacak kadar yer bulur. 1024px ise tablet (yatay) ile masaüstü arasındaki geçişi temsil eder; bu genişlikte üç sütunlu kart düzeni ve `max-width: 1200px` kısıtlaması anlam kazanır.
- **İçeriğim bu noktalarda nasıl değişiyor?**
  640px'de `about-content` dikey → yatay düzene geçer, form butonu tam genişlikten `width: auto`'ya döner. 1024px'de `main` içeriği `max-width: 1200px` ile ortalanır, proje ızgarası `repeat(3, 1fr)` ile zorunlu 3 sütuna sabitlenir.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?**
  Header tek boyutlu (yatay eksen üzerinde logo + nav) bir düzen gerektiriyor. Flexbox'ın `justify-content: space-between` özelliği logoyu sola, navigasyonu sağa itmenin en sade yoludur; ayrıca `flex-wrap: wrap` ile mobilde dikey yığın elde etmek zahmetsizdir.
- **Proje kartları için neden Grid seçtim?**
  Proje kartları iki boyutlu (satır + sütun) bir ızgara oluşturuyor. Grid'in `repeat(auto-fit, minmax(280px, 1fr))` özelliği, tek bir satır CSS ile media query yazmadan responsive ızgara sağlıyor; ekran genişliğine bağlı sütun sayısı otomatik hesaplanıyor.
- **auto-fit mi auto-fill mi kullandım?**
  `auto-fit` kullandım. `auto-fill`'den farkı: kapsayıcıda boş sütun kaldığında `auto-fit` bu sütunları kaldırıp mevcut öğeleri genişletir; az kart olduğunda kart boyutları daha dengeli görünür.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?**
  Ana renk olarak `#1E3A8A` (koyu lacivert) kullandım; profesyonel ve güvenilir bir yazılım mühendisi portföyüne uygun hissement veriyor. İkincil renk `#2563EB` (orta mavi) hover ve vurgu durumları için tercih edildi. Vurgu rengi `#7C3AED` (mor) etiketlerde kullanıcı dikkatini çekiyor.
- **Spacing skalasını nasıl belirledim?**
  4px tabanı (0.25rem) ile ikiye katlanan bir scale kullandım: `xs → sm → md → lg → xl → 2xl → 3xl`. Bu matematiksel orantı, boşluklar arasında görsel uyumu doğal olarak sağlar ve her seviyenin kullanım amacı açıkça ayrışıyor.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  Her seviye için `clamp(minimum, rem + vw, maksimum)` formatını kullandım. `rem` tabanlı minimum değer kullanıcının tarayıcı zoom ayarını korurken (`vw` tek başına zoom'u görmezden gelir), `vw` ile akıcı ölçekleme sağladım. Minimum değerleri hiçbir zaman 0.8rem'in altına düşürmedim; okunabilirliği koruduktan sonra maksimum değerleri sayfa hiyerarşisine göre belirledim.

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?**
  CSS'de varsayılan stiller 0–639px (mobil) için yazıldı. Hiçbir `max-width` media query kullanmadım; yalnızca `min-width: 640px` ve `min-width: 1024px` ile büyük ekranlara doğru genişledim. Bu sayede mobil cihazlar yalnızca temel CSS'i yükler; fazladan kural indirmez.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  640px'de: `section` padding'i artıyor, `.about-content` yatay düzene geçiyor, form butonu genişliği küçülüyor, `skill-tags` sola hizalanıyor. 1024px'de: `main` maksimum genişliğe sahip olup ortalanıyor, `section` padding'i daha da artıyor, `.project-grid` 3 sabit sütuna geçiyor.
- **Görsel boyutları nasıl yönettim?**
  `img { max-width: 100%; height: auto; display: block; }` genel kuralı tüm görsellerin kapsayıcısına sığmasını sağlıyor. Proje kartlarında `height: 200px; object-fit: cover` kullanarak farklı oranlardaki görsellerin tutarlı görünmesi sağlandı. Profil fotoğrafında `aspect-ratio: 1; object-fit: cover; border-radius: var(--radius-full)` ile dairesel ve orantılı görünüm elde edildi.
