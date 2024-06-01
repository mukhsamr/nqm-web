<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos'


const activeNav = ref('home')
const hideNav = ref(false)

function navChange() {

  const sections = document.querySelectorAll('section');
  let lastScrollTop = 0;

  window.onscroll = () => {

    // Activate Nav
    const scrollY = window.scrollY;

    const currentSection = [...sections].find(section => {
      const { offsetTop, clientHeight } = section;
      return scrollY >= offsetTop - clientHeight / 2 && scrollY < offsetTop + clientHeight / 2;
    });

    activeNav.value = currentSection?.id


    // Hide Nav on Scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    hideNav.value = scrollTop > lastScrollTop ? true : false

    lastScrollTop = scrollTop;
  };

}



onMounted(() => {
  navChange()

  AOS.init({ once: true })
})

</script>

<template>
  <nav class="fixed w-full z-10 bg-white shadow flex sm:justify-center transition-transform"
    :class="{ '-translate-y-36': hideNav }">

    <ul class="flex justify-around py-6 w-screen sm:max-w-lg text-sm overflow-hidden">
      <li>
        <a href="#home" class="block cursor-pointer"
          :class="activeNav == 'home' ? 'text-green-700 font-bold' : 'hover:text-green-700'">Home</a>
      </li>
      <li>
        <a href="#program" class="block cursor-pointer"
          :class="activeNav == 'program' ? 'text-green-700 font-bold' : 'hover:text-green-700'">Program</a>
      </li>
      <li>
        <a href="#galery" class="block cursor-pointer"
          :class="activeNav == 'galery' ? 'text-green-700 font-bold' : 'hover:text-green-700'">Galery</a>
      </li>
      <li>
        <a href="#history" class="block cursor-pointer"
          :class="activeNav == 'history' ? 'text-green-700 font-bold' : 'hover:text-green-700'">History</a>
      </li>
      <li>
        <a href="#kontak" class="block cursor-pointer"
          :class="activeNav == 'kontak' ? 'text-green-700 font-bold' : 'hover:text-green-700'">Contact</a>
      </li>
    </ul>
  </nav>

  <div class="bg-[url('/bg/bg.webp')]">

    <!-- Home -->
    <section id="home" class="h-screen">
      <div
        class="h-full flex items-center border-b-4 border-slate-700 bg-gradient-to-tr from-green-200/30 to-white/30 backdrop-blur-sm">
        <div class="">
          <div class="text-slate-800">
            <div class="px-12 sm:px-28">
              <div class="relative text-center">

                <div class="absolute -top-5 -left-5 fill-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 sm:h-12" viewBox="0 sm:0 448 512">
                    <path
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                  </svg>
                </div>

                <div class="text-xl sm:text-4xl">
                  Mencetak Generasi Islami yang <strong>Cerdas</strong>, <strong>Tangguh</strong> dan <strong>Berakhlak
                    Mulia</strong>
                </div>

                <div class="absolute -bottom-5 -right-5 fill-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 sm:h-12" viewBox="0 sm:0 448 512">
                    <path
                      dsm:="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                  </svg>
                </div>

              </div>
            </div>

            <hr class="my-10 w-0">

            <div class="text-center px-4 sm:px-16">
              <div class="text-xl sm:text-3xl font-[NotoNaskh]">
                اِنَّ هٰذَا الۡقُرۡاٰنَ يَهۡدِىۡ لِلَّتِىۡ هِىَ اَقۡوَمُ وَ يُبَشِّرُ الۡمُؤۡمِنِيۡنَ الَّذِيۡنَ
                يَعۡمَلُوۡنَ
                الصّٰلِحٰتِ اَنَّ لَهُمۡ اَجۡرًا كَبِيۡرًا
              </div>
              <div class="mt-6 text-sm sm:text-xl">
                "Sungguh, Al Qur'an ini memberi petunjuk ke (jalan) yang paling lurus dan memberi kabar gembira kepada
                orang
                mukmin
                yang mengerjakan kebajikan, bahwa mereka akan mendapat pahala yang besar"
              </div>
              <div class="text-xl mt-2 font-semibold">{ Al-Isra : 9 }</div>

            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Program -->
    <section id="program" class="min-h-screen">
      <div class="py-20 px-4 sm:px-24">
        <div class="text-xl sm:text-3xl font-semibold text-center" data-aos="fade-up">Program Kami</div>

        <div class="grid grid-cols-1 sm:grid-cols-3 justify-center content-stretch mt-10 gap-4">

          <div data-aos="fade-up">
            <div class="transition-transform hover:scale-105 flex flex-col h-full">
              <div class="flex space-x-4 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/rocket.webp" alt="rocket" class="w-14 h-14 sm:w-20 sm:h-20">
                <div class="text-lg sm:text-xl font-semibold">Taman Kanak-Kanak Qur'an</div>
              </div>
              <div class="grow flex items-center border-x-4 border-b-4 border-black px-6 py-4 bg-blue-200 rounded-b-xl">
                Program ini menggabungkan pembelajaran Islami dengan metode interaktif, memperkenalkan huruf Hijaiyah,
                doa-doa harian, dan kisah nabi melalui permainan dan kegiatan kreatif.
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div class="transition-transform hover:scale-105 flex flex-col h-full">
              <div class="flex space-x-4 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/quran.webp" alt="quran" class="w-14 h-14 sm:w-20 sm:h-20">
                <div class="text-lg sm:text-xl font-semibold">Taman Pendidikan Qur'an</div>
              </div>

              <div
                class="grow flex items-center border-x-4 border-b-4 border-black px-6 py-4 bg-green-200 rounded-b-xl">
                Program Ini dirancang untuk mempelajari dasar-dasar pengetahuan Al Quran dari mulai mengenal huruf
                hijaiah, membaca, menghafal sampai belajar hukum-hukum tajwid.
                Anak-anak juga diajak untuk mengenal dan menghafal doa-doa harian.
              </div>

            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div class="transition-transform hover:scale-105 flex flex-col h-full">
              <div class="flex space-x-4 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/toga.webp" alt="toga" class="w-14 h-14 sm:w-20 sm:h-20">
                <div class="text-lg sm:text-xl font-semibold">Lembaga Pendidikan Qur'an</div>
              </div>

              <div class="grow flex items-center border-x-4 border-b-4 border-black px-6 py-4 bg-lime-200 rounded-b-xl">
                Program ini dirancang untuk memperkuat pengetahuan Al Quran yang telah mereka peroleh,
                dengan fokus pada peningkatan ke-fashihan bacaan, memperdalam hukum-hukum tajwid. Anak-anak juga akan
                diajarkan kitab-kitab Aqidah, Nahwu Sharaf dan sejenisnya.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- Galery -->
    <section id="galery" class="min-h-screen">
      <div class="bg-[url('/bg/bg.webp')] px-2 py-16 sm:px-28 sm:py-20 bg-slate-700">
        <div class="text-xl sm:text-3xl font-semibold text-center text-white" data-aos="fade-up">Galery</div>

        <div class="mx-auto py-2 mt-8">
          <div class="flex flex-wrap">

            <div class="flex sm:w-1/2 flex-wrap">
              <div class="w-1/2 p-1 sm:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-1"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-1.webp" />
              </div>
              <div class="w-1/2 p-1 sm:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-2"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-2.webp" />
              </div>
              <div class="w-full p-1 sm:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-3"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-5.webp" />
              </div>
            </div>

            <div class="flex sm:w-1/2 flex-wrap">
              <div class="w-full p-1 sm:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-4"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-6.webp" />
              </div>
              <div class="w-1/2 p-1 sm:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-5"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-3.webp" />
              </div>
              <div class="w-1/2 p-1 sm:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-6"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-4.webp" />
              </div>
            </div>
          </div>
        </div>

        <a href="https://photos.app.goo.gl/rLFqLhLakGhZHoav7" target="_blank"
          class="inline-block rounded bg-white px-4 py-2 mt-2 ml-2 hover:bg-slate-900 hover:text-white transition-all">
          Lihat lebih banyak
        </a>

      </div>
    </section>


    <!-- History -->
    <section id="history" class="min-h-screen">
      <div class="pt-20 sm:px-28">
        <div class="text-xl sm:text-3xl px-4 sm:p-0 sm:text-4xl text-center">
          <span class="font-semibold sm:p-4" data-aos="fade-up">History</span>
        </div>

        <div class="mt-6 p-4 sm:p-10 shadow border-4 border-slate-700 relative bg-[url('/bg/paper.webp')] bg-cover"
          data-aos="fade-up">

          <div class="mb-6 sm:w-96 sm:float-right sm:ml-6">
            <img draggable="false" src="/bg/halaman.webp" alt="halaman"
              class="rounded-xl w-[21rem] h-64 sm:w-96 sm:h-72">
          </div>
          <div class="leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa perferendis quas reprehenderit vero vitae
              debitis dolore quos unde aperiam architecto rem officia ad optio repellat, exercitationem distinctio eum?
              Consequuntur, doloremque omnis? Dolorem nisi ducimus, quisquam molestias dolores officiis vitae, corporis
              perferendis asperiores placeat accusantium error laudantium natus, atque quae ipsam veniam et maxime
              reprehenderit nemo animi quod rerum. Possimus sunt exercitationem amet iste? Ex aliquid accusamus eligendi
              temporibus ad soluta eaque distinctio nobis ducimus quam consectetur natus sapiente, harum ut sunt
              doloremque tenetur totam fugiat sed doloribus! Explicabo, inventore, illo perferendis minima libero rem
              sunt, dignissimos quas eius voluptatem veritatis.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam itaque esse sit fugit.
              Doloribus debitis exercitationem perspiciatis incidunt, unde obcaecati architecto eaque saepe corporis
              quibusdam esse excepturi iure! Natus, molestias. Excepturi distinctio ducimus nihil voluptatem,
              reprehenderit neque aspernatur? Commodi iure sed harum tempore, unde facere mollitia a temporibus quo
              architecto optio voluptatum vel? Error vel obcaecati perferendis sapiente enim vero minima, impedit
              officiis ab nobis quod totam, blanditiis facere ratione nesciunt amet culpa nisi in necessitatibus nemo
              debitis hic odit. A tempore minus saepe nam exercitationem, amet quisquam animi officiis rem.
              Perspiciatis, numquam quas? Exercitationem repudiandae ducimus doloremque error excepturi magnam totam
              cupiditate, odio ab veritatis at alias qui nisi facere beatae expedita mollitia autem numquam eligendi
              minus? Enim, cum. Commodi aperiam cumque tempora nisi facere praesentium aut harum necessitatibus saepe
              placeat fuga eos autem doloremque laborum tenetur quos obcaecati maxime iusto tempore, a sint perferendis
              reprehenderit. Nemo, distinctio.

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores iure quidem repellendus, nisi
              quasi dolores aperiam nam suscipit laborum, iusto assumenda atque! Perferendis, maiores. Voluptatibus sit
              quo necessitatibus, alias magni commodi error modi provident nulla nobis tempore. Deserunt porro doloribus
              numquam beatae error dicta illo ut quaerat! Iusto laudantium excepturi perspiciatis repudiandae, iure quos
              recusandae quia quam deserunt sequi dolorem, deleniti consequuntur necessitatibus asperiores pariatur!
              Animi natus eaque, soluta modi consectetur, illum facilis deleniti ea quas architecto atque vel!
            </p>
          </div>

        </div>


        <div class="my-20 space-y-10">

          <div class="grid grid-cols-2 sm:grid-cols-4 sm:gap-8 gap-4" data-aos="fade-up">
            <div>
              <img draggable="false" src="/guru/abi.webp" alt="abi"
                class="w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-full object-contain object-center border-4 border-black transition-transform hover:-translate-y-3 hover:shadow-xl">

              <div class="text-center mt-3">
                <div class="font-semibold">- Pembina Yayasan -</div>
                <div>Mudzakir Ashari (Abi)</div>
              </div>

            </div>

            <div>
              <img draggable="false" src="/guru/umi.webp" alt="umi"
                class="w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-full object-contain object-center border-4 border-black transition-transform hover:-translate-y-3 hover:shadow-xl">

              <div class="text-center mt-3">
                <div class="font-semibold">- Pembina Yayasan -</div>
                <div>Ni'maturrohmah Ashari (Umi)</div>
              </div>
            </div>

            <div>
              <img draggable="false" src="/guru/user.webp" alt="user"
                class="w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-full object-contain object-center border-4 border-black">

              <div class="text-center mt-3">
                <div class="font-semibold">- Ketua Yayasan -</div>
                <div>Nur Akbar Badawie</div>
              </div>
            </div>

            <div>
              <img draggable="false" src="/guru/user.webp" alt="user"
                class="w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-full object-contain object-center border-4 border-black">

              <div class="text-center mt-3">
                <div class="font-semibold">- ??? -</div>
                <div>Ucu Sholihat Nur Hasanah</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- Contact -->
    <section id="kontak">
      <footer class="border-t-4 border-black bg-lime-200">
        <div class="py-10 px-4 sm:px-28 bg-[url('/bg/bg.webp')]">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div data-aos="fade-up">
              <div class="text-2xl font-semibold"># Contact</div>

              <div class="flex items-center space-x-4 mt-5 group cursor-pointer">
                <img draggable="false" src="/icon/wa.webp" alt="wa"
                  class="w-9 h-9 group-hover:animate-[wiggle_1s_infinite]">
                <div class="font-semibold group-hover:scale-105 transition-transform">0895-2000-2002</div>
              </div>

              <div class="flex items-center space-x-4 mt-5 group cursor-pointer">
                <img draggable="false" src="/icon/gmail.webp" alt="gmail"
                  class="w-9 h-9 group-hover:animate-[wiggle_1s_infinite]">
                <div class="font-semibold group-hover:scale-105 transition-transform">nurulquranmulia@gmail.com</div>
              </div>
            </div>

            <div data-aos="fade-up">
              <div class="text-2xl font-semibold"># Follow</div>

              <div class="flex items-center space-x-4 mt-5 group cursor-pointer">
                <img draggable="false" src="/icon/fb.webp" alt="fb"
                  class="w-9 h-9 group-hover:animate-[wiggle_1s_infinite]">
                <div class="font-semibold group-hover:scale-105 transition-transform">Nurul Qur'an Mulia</div>
              </div>

              <div class="flex items-center space-x-4 mt-5 group cursor-pointer">
                <img draggable="false" src="/icon/ig.webp" alt="ig"
                  class="w-9 h-9 group-hover:animate-[wiggle_1s_infinite]">
                <div class="font-semibold group-hover:scale-105 transition-transform">@nqmulia</div>
              </div>

              <div class="flex items-center space-x-4 mt-5 group cursor-pointer">
                <img draggable="false" src="/icon/yt.webp" alt="yt"
                  class="w-9 h-9 group-hover:animate-[wiggle_1s_infinite]">
                <div class="font-semibold group-hover:scale-105 transition-transform">@nurulquranmulia</div>
              </div>

            </div>
          </div>

          <div class="mt-10">
            <div class="text-2xl font-semibold"># Maps</div>
            <div class="border-4 border-white mt-5">
              <iframe title="map-nqm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6655961827805!2d106.58235817418753!3d-6.563825864163738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d9e22963191d%3A0xf52d0305f615b485!2sNurul%20Qur&#39;an%20Mulia%20(NQM)!5e0!3m2!1sid!2sid!4v1693491892149!5m2!1sid!2sid"
                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>

        <div class="font-black px-4 sm:px-28 py-4 text-right">
          Copyright © {{ new Date().getFullYear() }} nurulquranmulia.sch.id
        </div>
      </footer>
    </section>
  </div>
</template>
