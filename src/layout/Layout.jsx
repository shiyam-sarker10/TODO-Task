import { Link, NavLink } from "react-router-dom";



const Layout = () => {

    return (
      <div className="flex h-full">
        {/* dashboard- sidebar  */}
        <div className=" sticky top-0 h-screen w-[20%]">
          <h1 className="py-20 text-center text-3xl font-semibold">TODO</h1>
          <div className="flex flex-col">

              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "bg-green-300 px-6 py-2 text-lg font-semibold"
                      : "px-6 py-2 text-lg font-semibold"
                }
              >
                <span></span>
               <span>Dashboard</span>
              </NavLink>
          </div>
        </div>
        {/* content side - outlet  */}
        <div className="w-[80%] bg-green-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          atque sint doloremque nihil beatae exercitationem repudiandae
          consequatur, ad, nobis nemo ab maxime, rem quia reprehenderit magni
          dolorum eaque. Aperiam rem in velit quaerat. Vel, perferendis id. Quam
          nemo optio facere voluptas numquam consectetur, nesciunt non
          laudantium explicabo modi, expedita cum esse quis maxime autem
          exercitationem provident. Explicabo porro ut iste perferendis quasi
          soluta. Maxime doloribus culpa ad perferendis, et repellat vero
          reprehenderit nihil debitis? Alias error architecto perspiciatis,
          laborum iusto quam, porro dolorum sapiente quas at eum sequi officiis
          in qui iste voluptas aliquam asperiores ipsum est rerum officia
          dignissimos voluptates? Quas quis dolorem incidunt, blanditiis qui ea
          laboriosam maxime aut. Eos, soluta. Nulla libero mollitia, consectetur
          repudiandae, debitis quisquam atque odio praesentium tempore amet
          cumque quibusdam deserunt fugit eaque omnis! Odio vel a vitae
          voluptatum laboriosam necessitatibus consequatur quibusdam perferendis
          molestias quas. Deleniti fuga tempora modi, eligendi consequuntur
          dolorem doloribus excepturi porro nobis? Libero commodi ipsam maiores,
          voluptate similique ducimus eveniet veritatis ratione, magnam quia
          repellendus soluta. Alias earum, totam voluptatem facilis possimus hic
          dolor corporis magni, veritatis quae repudiandae iste. Non porro
          delectus quisquam accusantium aliquam expedita amet ipsa ab
          asperiores. Nesciunt reprehenderit esse natus. Quae earum, obcaecati
          quam ex labore dolorum. Distinctio suscipit pariatur deleniti
          temporibus, consectetur debitis veniam accusantium nesciunt
          necessitatibus ducimus molestiae exercitationem sequi dolor porro
          quisquam iste totam corporis reprehenderit tempore fugiat! Accusamus
          minus porro quisquam reiciendis eum esse recusandae dolorum temporibus
          dolorem voluptates nulla, error earum vero illum ipsa dignissimos aut,
          veritatis suscipit. Pariatur ex earum culpa nemo dolorum inventore
          repellat suscipit esse, nobis ipsam magnam laudantium hic sed ipsum
          omnis quis iure? Facilis laudantium beatae, suscipit est temporibus
          eligendi, aliquid quod reprehenderit cupiditate, at earum ducimus
          doloribus inventore delectus ipsum fugiat distinctio quis ea rerum
          saepe blanditiis porro officia. Ut deleniti consequuntur optio a
          quibusdam non reprehenderit fugiat delectus possimus quos assumenda,
          nostrum deserunt dolor nisi quae, consequatur corrupti? Quis error qui
          accusantium ad, aliquam labore repellendus earum inventore, provident
          aliquid eos asperiores, atque quidem unde sapiente nulla temporibus
          sint? Nisi veniam dolore accusamus fugit voluptatum dolor maxime,
          placeat modi eveniet inventore nobis sit qui minima nihil perferendis
          tenetur similique, a laudantium quidem tempore, labore itaque
          explicabo omnis. Minus reprehenderit laboriosam sapiente aliquid
          mollitia delectus repellat quibusdam ipsum itaque velit magni, nulla
          deleniti asperiores fugiat cumque aspernatur adipisci autem expedita
          incidunt, debitis dolore voluptatem, placeat assumenda? Labore autem
          corrupti eius, voluptatem perferendis delectus libero illo, harum
          animi soluta fugiat, dignissimos laboriosam atque. Iure odit laborum
          incidunt iusto adipisci maxime eaque! Ut laborum nihil fugiat ullam
          tenetur maxime rem nesciunt soluta quod ipsam aliquid adipisci, nam
          quos numquam consequatur delectus eaque dignissimos dolor accusamus
          voluptates commodi facilis, saepe at eius? Nemo aperiam ab repudiandae
          doloribus sunt, similique qui ipsam quam vero at, cupiditate
          voluptatibus asperiores a maiores tenetur repellendus minima vitae.
          Fugit facere sint quae libero nam in, tempore tempora porro corporis
          sunt dolores nobis recusandae facilis provident nesciunt impedit! Sint
          illum ut quae cupiditate officia ab assumenda vel esse? Veniam
          laboriosam beatae voluptates incidunt. Alias quod est a quidem,
          reiciendis qui dolorem non sed optio perspiciatis laboriosam iusto eos
          deleniti, laborum modi porro id autem maxime quas natus asperiores
          nobis aliquam. Sequi laudantium nisi molestiae quos odio provident ea
          ex fugiat. Nulla, voluptatum est cum at eveniet quaerat soluta aliquid
          vitae ipsum! Quia ex non consequuntur eaque hic distinctio velit
          facere excepturi nihil. Odio pariatur ad praesentium recusandae,
          sapiente quasi explicabo exercitationem dolores illum alias doloribus
          libero at beatae, magnam quod neque nobis id quae! Reprehenderit,
          praesentium. Iure atque deleniti id cumque quisquam rem ea repellat
          eveniet itaque perspiciatis, nihil laboriosam at rerum dicta ad eum
          tempore error. Similique ipsum nisi tempore eius, ut doloribus
          dignissimos, laudantium itaque facilis, veritatis vel natus delectus
          voluptates aperiam quia quasi alias commodi harum autem. Sit
          voluptatem perspiciatis quidem eveniet numquam, officia commodi ab
          corporis voluptate quis quasi deleniti sequi cum explicabo suscipit
          aut! Alias voluptates optio id accusantium at aperiam dolore eveniet
          reprehenderit voluptatibus nulla architecto tenetur omnis rem
          assumenda cumque animi, iusto sapiente consequuntur eius quasi beatae
          iste! Maiores autem pariatur quia enim magnam, perspiciatis suscipit
          iure aperiam tempore cumque eligendi ab obcaecati odio harum. Quo
          nulla doloremque dolores eum cupiditate incidunt at amet, iste alias.
          Necessitatibus deserunt ut, maiores alias porro delectus autem minus
          voluptas tempore non! Facilis dignissimos beatae consequuntur delectus
          sed minus similique, aspernatur ea esse blanditiis laborum
          perspiciatis animi dolores excepturi voluptas quod quas sequi possimus
          ab tempora. Qui culpa natus possimus corrupti consequuntur cupiditate
          quisquam? Quidem sed, voluptate iure dolor expedita eaque eveniet
          repellendus, earum labore vel quibusdam vero minima minus incidunt
          ratione impedit? Incidunt possimus minima voluptatum quod rerum
          expedita, optio quae consequuntur officia numquam quas quo quidem
          nihil facilis sint nostrum cum vitae. Laudantium accusamus qui ab
          dolor nemo repellendus veritatis? At placeat numquam laudantium id
          animi labore quo, molestiae consequatur itaque nesciunt inventore sed
          nam cupiditate possimus sunt temporibus corporis rerum error,
          voluptatibus aliquam vel facere, quibusdam laboriosam unde! Iste
          tempore magni earum porro ipsam aliquid ad ratione, impedit aspernatur
          enim accusantium placeat modi eum, fuga expedita unde perferendis quo
          debitis qui harum repudiandae officiis quam tenetur! Illo animi sunt
          neque at aliquam aut eos veniam atque voluptates eligendi magni cumque
          itaque, repellendus corporis nesciunt sequi nam maiores iusto
          perferendis ea. Architecto fuga earum qui quis sint pariatur provident
          suscipit delectus natus. Placeat eum, facere numquam soluta,
          distinctio illum eaque sed aliquam iure deserunt impedit laudantium
          earum voluptatum perferendis! Doloremque aliquid, iusto harum ipsa,
          voluptas error voluptatem natus quasi culpa sapiente a, blanditiis
          autem. Facilis ipsam modi tempore ut illum! Suscipit sit omnis cumque
          ex explicabo ad, cum consectetur accusantium, repudiandae eveniet
          aperiam sapiente hic magni! Vel, enim. Minus, nemo placeat vero
          aliquid perspiciatis adipisci obcaecati est architecto maiores alias
          animi quae voluptatum neque, tempore dolor aut laboriosam dolore in
          accusantium ab tempora sequi, error mollitia? Laboriosam, tempore
          totam! Perspiciatis quaerat minus sint exercitationem vel nulla, enim,
          dolorem fuga animi iusto placeat sit pariatur nobis accusamus ducimus
          aut impedit culpa modi? Voluptas laboriosam laudantium optio
          consectetur?
        </div>
      </div>
    );
};

export default Layout;