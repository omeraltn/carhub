# 🚗 CarHub - Araç Tarama Platformu

CarHub, modern web teknolojileri kullanarak geliştirilmiş, kullanıcı dostu bir araç tarama ve filtreleme platformudur. OpenDataSoft API'sinden gerçek araç verilerini alarak, kullanıcılara marka, model ve yıl gibi kriterlerle araç arama imkanı sunmaktadır.

## 📋 Proje Hakkında

CarHub, otomotiv alanında araştırma yapan, araç bilgisi arayan veya otomobil pazarını analiz etmek isteyen kullanıcılar için tasarlanmıştır. Büyük bir veri seti üzerinde hızlı ve etkili arama yapabilmenizi sağlar.

### 🎯 Temel Özellikler

- ✅ **Gelişmiş Filtreleme**: Marka, model ve üretim yılına göre araç filtreleme
- ✅ **Sayfalı Sonuçlar**: Büyük veri setlerini yönetmek için sayfalanmış sonuçlar
- ✅ **Responsive Tasarım**: Tüm cihazlarda mükemmel görüntüleme
- ✅ **Hızlı Performans**: Vite ile optimize edilmiş yükleme hızı
- ✅ **Modern UI/UX**: Tailwind CSS ile şık ve modern arayüz
- ✅ **Yapılandırılmış Veriler**: TypeScript ile type-safe veri yapıları
- ✅ **Animasyonlu Bileşenler**: Motion kütüphanesi ile akıcı animasyonlar

## 🛠️ Kullanılan Teknolojiler

### Temel Teknolojiler

| Teknoloji            | Sürüm  | Açıklama                       |
| -------------------- | ------ | ------------------------------ |
| **React**            | 19.2.5 | UI bileşen kütüphanesi         |
| **TypeScript**       | 6.0.2  | Tip güvenli JavaScript         |
| **Vite**             | 8.0.10 | Hızlı build tool ve dev server |
| **Tailwind CSS**     | 4.2.4  | Utility-first CSS framework    |
| **React Router DOM** | 7.14.2 | İstemci tarafı yönlendirme     |

### Kütüphaneler ve Araçlar

#### Frontend Kütüphaneleri

- **react-select** (5.10.2): Gelişmiş dropdown/select bileşenleri
- **motion** (12.38.0): Yumuşak animasyonlar ve geçişler
- **rc-pagination** (5.1.0): Sayfalama kontrolü
- **axios** (1.15.2): HTTP istek kütüphanesi (isteğe bağlı, fetch de kullanılıyor)
- **@tailwindcss/vite** (4.2.4): Tailwind CSS Vite plugin'i

#### Geliştirme Araçları

- **ESLint** (10.2.1): Kod kalitesi kontrolü
- **eslint-plugin-react-hooks**: React Hooks en iyi uygulamaları
- **eslint-plugin-react-refresh**: React Fast Refresh desteği
- **@vitejs/plugin-react** (6.0.1): Vite React plugin'i

## 📁 Proje Yapısı

```
car-hub/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── button/          # Buton bileşeni
│   │   ├── card/            # Araç kartı ve detay bilgisi
│   │   ├── container/       # Layout kapsayıcı
│   │   ├── error/           # Hata gösterimi
│   │   ├── filter/          # Filtreleme bileşenleri
│   │   │   ├── searchbar    # Arama çubuğu
│   │   │   └── year         # Yıl seçimi
│   │   ├── footer/          # Alt bilgi
│   │   ├── header/          # Üst başlık
│   │   ├── hero/            # Hoş geldiniz bölümü
│   │   ├── list/            # Araç listesi
│   │   ├── loader/          # Yüklenme göstergesi
│   │   └── modal/           # Modal pencereler
│   ├── pages/               # Sayfa bileşenleri
│   │   ├── home/            # Ana sayfa
│   │   └── not-found/       # 404 sayfası
│   ├── types/               # TypeScript tür tanımları
│   ├── utils/               # Yardımcı fonksiyonlar
│   │   ├── constants.ts     # Sabitler
│   │   ├── formatData.ts    # Veri formatlama
│   │   ├── getImage.ts      # Araç görseli alma
│   │   ├── getPrice.ts      # Yakıt maliyeti hesaplama
│   │   └── service.ts       # API istekleri
│   ├── App.tsx              # Ana uygulama bileşeni
│   ├── main.tsx             # Uygulamanın giriş noktası
│   └── index.css            # Global stiller
├── public/                  # Statik dosyalar
├── package.json             # Proje bağımlılıkları
├── vite.config.ts          # Vite yapılandırması
├── tsconfig.json           # TypeScript yapılandırması
├── eslint.config.js        # ESLint kuralları
└── README.md               # Bu dosya
```

## 🔌 API Entegrasyonu

Proje, **OpenDataSoft** platformunun araç veri setini kullanmaktadır:

- **API Base URL**: `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records`
- **Filtreleme Parametreleri**:
  - `make`: Araç markası
  - `model`: Araç modeli
  - `year`: Üretim yılı
  - `limit`: Sayfa başına sonuç sayısı
  - `offset`: Sayfalama için başlangıç noktası

## 🚀 Başlarken

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum

1. **Depoyu klonlayın:**

```bash
git clone https://github.com/omeraltn/carhub.git
cd car-hub
```

2. **Bağımlılıkları yükleyin:**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

Uygulamaya `http://localhost:5173` adresinden erişebilirsiniz.

## 📝 Kullanılabilir Komutlar

| Komut             | Açıklama                                           |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Geliştirme sunucusunu başlatır (Vite)              |
| `npm run build`   | TypeScript derlemesi ve production build oluşturur |
| `npm run lint`    | ESLint kullanarak kod kalitesini kontrol eder      |
| `npm run preview` | Build edilen projeyi ön izlemede gösterir          |

## 🎨 Tasarım ve Stil

Proje, **Tailwind CSS** kullanarak modern ve responsive bir tasarıma sahiptir:

- 🌙 Koyu tema tasarımı
- 📱 Mobil, tablet ve desktop cihazlara uyumlu
- ✨ Gradyan arka planlar ve blur efektleri
- 🎬 Motion kütüphanesi ile animasyon desteği
- 🎯 Tailwind utility classları ile esnek styling

## 🏗️ Yöntemler ve Best Practices

### Component Architecture

- **Modüler Yapı**: Her bileşen ayrı dizinde, bağımsız şekilde
- **Single Responsibility**: Her bileşen tek bir işlemi gerçekleştir
- **Type Safety**: TypeScript ile tam tür kontrolü

### Veri Yönetimi

- **API Service Layer**: Merkezileştirilmiş API istekleri (`service.ts`)
- **Type Definitions**: Tüm veri yapıları TypeScript interfaces ile tanımlanmış
- **Utility Functions**: Verinin formatlandırılması ve işlenmesi (`formatData.ts`, `getPrice.ts`, `getImage.ts`)

### Yönlendirme

- **React Router DOM**: Çok sayfalı uygulama desteği
- **Nested Routes**: Ana sayfa ve 404 sayfası
- **Client-Side Routing**: Hızlı sayfa geçişleri

### Kod Kalitesi

- **ESLint**: Tutarlı kod stili
- **TypeScript**: Tip güvenliği ve otomatik tamamlama
- **Modern React**: Functional components ve hooks

## 📊 Veriler ve Filtreler

Uygulamada aşağıdaki filtreleme seçenekleri bulunmaktadır:

1. **Marka Seçimi** (Make): Araç üreticisine göre filtrele
2. **Model Seçimi** (Model): Seçilen markanın modellerine göre filtrele
3. **Yıl Seçimi** (Year): Üretim yılına göre filtrele
4. **Sayfalama**: Sonuçları sayfalar halinde görüntüle

Her filtreleme işleminde, veriler real-time olarak API'den çekilir ve kullanıcıya gösterilir.

## 🔍 Bileşen Detayları

### Filter Components

- **Filter**: Ana filtre bileşeni
- **Searchbar**: Arama işlevselliği
- **Year**: Yıl filtreleme dropdown

### Card Components

- **Card**: Araç özet kartı
- **Info**: Detaylı araç bilgileri

### Modal Components

- **Images**: Araç görselleri modal
- **Info**: Detaylı bilgiler modal

### Diğer Bileşenler

- **Header**: Üst navigasyon
- **Footer**: Alt bilgiler
- **Hero**: Ana sayfa tanıtım bölümü
- **List**: Araç listesi container
- **Loader**: Yükleme göstergesi
- **Error**: Hata gösterimi

## 🌟 Öne Çıkan Özellikler

### Performans Optimizasyonu

- Vite ile hızlı geliştirme ve build
- TypeScript ile compile-time hata tespiti
- Code splitting ve lazy loading desteği

### UX/UI İyileştirmeleri

- Blur efektleri ile modern görünüm
- Pulsing animasyonlar ile dinamik atmosfer
- Responsive grid layout ile esnek tasarım
- Loading states ve error handling

### Geliştirici Deneyimi

- Sıkı TypeScript konfigürasyonu
- Detaylı ESLint kuralları
- Modüler ve ölçeklenebilir yapı
- Açık hata mesajları

## 📄 Lisans

Bu proje açık kaynak olarak sunulmaktadır.

---

**CarHub** - Araç aramayı basit ve etkili hale getiriyoruz. 🚗✨
