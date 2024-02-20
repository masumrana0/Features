import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun, BsPcDisplayHorizontal } from "react-icons/bs";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  const element = document.documentElement;

  const icons = [
    {
      icon: BsSun,
      text: "light",
    },
    {
      icon: BsFillMoonFill,
      text: "dark",
    },
    {
      icon: BsPcDisplayHorizontal,
      text: "system",
    },
  ];
  // console.log(localStorage);

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 duration-300">
      <div className="  flex justify-end px-20 py-5 ">
        <div className="p-1 rounded-md dark:text-gray-100 dark:bg-slate-700 duration-300">
          {icons.map((icon) => (
            <button
              onClick={() => setTheme(icon.text)}
              key={icon.text}
              className={` w-8 h-8 text-xl leading-9 rounded-full m-1   ${
                theme == icon.text && "text-sky-600"
              }`}
            >
              <icon.icon />
            </button>
          ))}
        </div>
      </div>

      <div className="text-center py-10">
        <h2 className="text-3xl font-bold">Dark Mode Implementation</h2>
        <p className="font-semibold text-2xl">Share and Subscribe</p>
        <div className="w-[80%] mx-auto text-xl flex flex-col gap-5 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi
            illum voluptate magni eum odio doloribus aspernatur voluptatem
            assumenda ut adipisci quas quo, amet laudantium officia error ad.
            Debitis ad est quasi odio aliquam placeat consequatur consectetur
            sed totam perferendis nesciunt iste officiis, nulla deleniti at.
            Laborum facere placeat aperiam delectus quia. Deserunt natus modi
            unde. Aut blanditiis saepe sequi fuga ea accusantium soluta quod
            minima, recusandae odit facere enim dolor quaerat officiis qui
            voluptatum hic similique mollitia vel ratione deleniti esse officia
            consectetur. Ipsa reprehenderit quam magnam aliquam, perferendis id
            assumenda minus quas deleniti officiis labore harum voluptatum odit
            ex dolor ea ipsam nobis esse. Repudiandae error placeat assumenda
            cumque nam illo, hic unde et neque! Numquam minima, qui pariatur non
            fugit hic id commodi suscipit
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            nobis tempora assumenda reprehenderit, aliquid, illum nam fuga
            inventore rem vel modi? Officiis ratione ea eius, eaque doloribus
            alias perspiciatis sequi repellat soluta modi, pariatur dicta quos
            ut est ab. Alias sint ut deleniti veniam autem eius dolor repellat
            harum, beatae, reprehenderit delectus nemo accusantium magni qui,
            distinctio quam! Quos magni officiis, incidunt fugit totam, libero
            ipsum delectus, recusandae aliquam facilis quis dolore nulla optio
            voluptatem. Nihil rerum consequatur officiis amet illum dolore
            commodi quis, tenetur quo totam mollitia, magni est! Doloremque
            nostrum hic porro labore quas odit quae vero optio suscipit animi
            error, voluptatum nemo minima culpa? Sint sunt nostrum quasi cumque
            vitae omnis atque. Placeat dolorem culpa voluptates repellat
            obcaecati, a amet corporis harum voluptatum, repudiandae aut
            eveniet. Repellat cupiditate accusamus magnam ad incidunt?
            Voluptates, delectus debitis ipsum, possimus vero, dolore deleniti
            impedit porro quas libero provident molestias pariatur. Eligendi nam
            deleniti excepturi, unde magni praesentium eveniet eum in quia sunt
            amet sit soluta culpa! Beatae sed perspiciatis natus magnam quis!
            Tenetur numquam adipisci neque veniam nisi id, ad placeat tempora
            quaerat incidunt a hic dignissimos aperiam ex, culpa tempore soluta
            in, ratione perferendis. Voluptatum doloremque dolores voluptatem
            quia quidem, velit facilis optio quaerat accusantium obcaecati error
            distinctio eveniet illo
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            magni explicabo repellat laboriosam hic quasi libero adipisci, qui
            sequi atque at ullam? Rem iste ea repellat autem ad exercitationem,
            dolore dolor, iusto eaque quaerat fuga nemo molestias veritatis
            debitis illo quibusdam ratione animi eius tenetur voluptate cum
            officiis nihil libero. Obcaecati nam vero eos nostrum? Quia esse
            dolore error nihil iusto qui repudiandae harum accusamus deserunt,
            aperiam ipsam reprehenderit culpa laborum ex quidem, facere, totam
            corporis nam blanditiis sapiente a perferendis! Consequuntur quaerat
            dolores, at soluta voluptatum adipisci incidunt, amet veniam optio
            eveniet modi voluptatem libero non quia, accusamus quisquam sed eum?
            Odit dolorum vel delectus obcaecati ab maxime doloremque expedita
            nesciunt consectetur ipsum. Aliquid molestias libero consequatur
            consectetur! Labore recusandae minima nostrum omnis. Accusantium
            perspiciatis sequi non dolor, nisi deserunt necessitatibus at
            ratione aut tenetur provident in error illo doloribus? Facilis sint
            blanditiis nesciunt totam odio at atque quasi obcaecati. Tenetur
            natus enim molestiae cupiditate eius dolor et delectus repellendus
            dolorum debitis id doloremque sapiente provident recusandae, rerum
            voluptates tempore mollitia? Repudiandae saepe dolorum, esse eos
            voluptatem iste, totam adipisci nesciunt animi repellat
            necessitatibus? Quae dignissimos architecto molestiae commodi
            aliquid expedita. Facere animi sint in aliquid sunt deleniti
            perferendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
