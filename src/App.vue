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
  <nav class="fixed w-full z-10 bg-white shadow flex md:justify-center transition-transform"
    :class="{ '-translate-y-36': hideNav }">

    <ul class="flex justify-around py-6 w-screen md:max-w-lg text-sm overflow-hidden">
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
      <div class="h-full flex items-center border-b-4 border-slate-700 bg-white">
        <div class="">
          <div class="text-slate-800">
            <div class="px-12 md:px-28">
              <div class="relative text-center">

                <div class="absolute -top-5 -left-5 fill-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-12" viewBox="0 0 448 512">
                    <path
                      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                  </svg>
                </div>

                <div class="text-xl md:text-4xl">
                  Mencetak Generasi Islami yang <strong>Cerdas</strong>, <strong>Tangguh</strong> dan <strong>Berakhlak
                    Mulia</strong>
                </div>

                <div class="absolute -bottom-5 -right-5 fill-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-12" viewBox="0 0 448 512">
                    <path
                      d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                  </svg>
                </div>

              </div>
            </div>

            <hr class="my-10 w-0">

            <div class="text-center px-4 md:px-16">
              <div class="text-xl md:text-3xl font-[NotoNaskh]">
                اِنَّ هٰذَا الۡقُرۡاٰنَ يَهۡدِىۡ لِلَّتِىۡ هِىَ اَقۡوَمُ وَ يُبَشِّرُ الۡمُؤۡمِنِيۡنَ الَّذِيۡنَ
                يَعۡمَلُوۡنَ
                الصّٰلِحٰتِ اَنَّ لَهُمۡ اَجۡرًا كَبِيۡرًا
              </div>
              <div class="mt-6 text-sm md:text-xl">
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
      <div class="py-20 px-4 md:px-24 text-center">
        <div class="text-3xl font-semibold" data-aos="fade-up">Program Kami</div>

        <div class="grid grid-cols-1 md:grid-cols-3 justify-center mt-10 gap-4">

          <div data-aos="fade-up">
            <div class="transition-transform hover:scale-105">
              <div class="flex space-x-3 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/rocket.webp" alt="rocket" class="w-20 h-20">
                <div class="text-xl font-semibold">Taman Kanak-Kanak Qur'an</div>
              </div>


              <div class="border-x-4 border-b-4 border-black px-6 py-4 bg-blue-200 rounded-b-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam, sed inventore accusantium
                quas
                ipsa
                sint deserunt eveniet eum neque.
              </div>

            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div class="transition-transform hover:scale-105">
              <div class="flex space-x-3 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/quran.webp" alt="quran" class="w-20 h-20">
                <div class="text-xl font-semibold">Taman Pendidikan Qur'an</div>
              </div>


              <div class="border-x-4 border-b-4 border-black px-6 py-4 bg-green-200 rounded-b-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam, sed inventore accusantium
                quas
                ipsa
                sint deserunt eveniet eum neque.
              </div>

            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div class="transition-transform hover:scale-105">
              <div class="flex space-x-3 border-4 border-black p-4 items-center bg-white rounded-t-xl">
                <img draggable="false" src="/icon/toga.webp" alt="toga" class="w-20 h-20">
                <div class="text-xl font-semibold">Lembaga Pendidikan Qur'an</div>
              </div>


              <div class="border-x-4 border-b-4 border-black px-6 py-4 bg-lime-200 rounded-b-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam, sed inventore accusantium
                quas
                ipsa
                sint deserunt eveniet eum neque.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- Galery -->
    <section id="galery" class="min-h-screen">
      <div class="bg-[url('/bg/bg.webp')] px-2 py-16 md:px-28 md:py-20 bg-slate-700">
        <div class="text-3xl font-semibold text-center text-white" data-aos="fade-u">Galery</div>

        <div class="mx-auto py-2 mt-8">
          <div class="flex flex-wrap">

            <div class="flex md:w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-1"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-1.webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-2"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-2.webp" />
              </div>
              <div class="w-full p-1 md:p-2 transition-transform hover:scale-105">

                <img draggable="false" alt="gallery-img-3"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-5.webp" />
              </div>
            </div>

            <div class="flex md:w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-4"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-6.webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-5"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-3.webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2 transition-transform hover:scale-105">
                <img draggable="false" alt="gallery-img-6"
                  class="h-full w-full rounded-lg object-cover object-center border-4 border-white" data-aos="zoom-in"
                  src="/galery/galery-4.webp" />
              </div>
            </div>
          </div>
        </div>

        <a href="https://photos.app.goo.gl/rLFqLhLakGhZHoav7" target="_blank"
          class="text-white border-2 rounded border-white px-2 py-1 hover:bg-white hover:text-slate-700 transition-all">
          Lihat lebih banyak
        </a>

      </div>
    </section>


    <!-- History -->
    <section id="history" class="min-h-screen">
      <div class="pt-20 md:px-28">
        <div class="text-3xl px-4 md:p-0 md:text-4xl text-center">
          <span class="font-semibold md:p-4" data-aos="fade-up">History</span>
        </div>

        <div class="mt-6 p-4 md:p-10 shadow border-4 border-slate-700 relative bg-[url('/bg/paper.webp')] bg-cover"
          data-aos="flip-left">

          <div class="mb-6 md:w-96 md:float-right md:ml-6">
            <img draggable="false" src="/bg/halaman.webp" alt="halaman"
              class="rounded-xl w-[21rem] h-64 md:w-96 md:h-72">
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

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up">
            <div>
              <img draggable="false" src="/guru/abi.webp" alt="abi"
                class="w-44 h-44 mx-auto rounded-full object-contain object-center border-4 border-black transition-transform hover:-translate-y-3 hover:shadow-xl">

              <div class="text-center mt-3">
                <div class="font-semibold">- Pembina Yayasan -</div>
                <div>Mudzakir Ashari (Abi)</div>
              </div>

            </div>

            <div>
              <img draggable="false" src="/guru/umi.webp" alt="umi"
                class="w-44 h-44 mx-auto rounded-full object-contain object-center border-4 border-black transition-transform hover:-translate-y-3 hover:shadow-xl">

              <div class="text-center mt-3">
                <div class="font-semibold">- Pembina Yayasan -</div>
                <div>Ni'maturrohmah Ashari (Umi)</div>
              </div>
            </div>

            <div>
              <img draggable="false" src="/guru/user.webp" alt="user"
                class="w-44 h-44 mx-auto rounded-full object-contain object-center border-4 border-black">

              <div class="text-center mt-3">
                <div class="font-semibold">- Ketua Yayasan -</div>
                <div>Nur Akbar Badawie</div>
              </div>
            </div>

            <div>
              <img draggable="false" src="/guru/user.webp" alt="user"
                class="w-44 h-44 mx-auto rounded-full object-contain object-center border-4 border-black">

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
        <div class="py-10 px-4 md:px-28 bg-[url('/bg/bg.webp')]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
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

        <div class="font-black px-4 md:px-28 py-4 text-right">
          Copyright © 2023 nurulquranmulia.sch.id
        </div>
      </footer>
    </section>
  </div>
</template>
