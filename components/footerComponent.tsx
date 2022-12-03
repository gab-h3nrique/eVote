
import GithubIcon from "./icons/GithubIcon";
import HomeIcon from "./icons/HomeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


export default function FooterComponent() {
  
 

  return (
    <>
        <article className="mt-auto flex flex-col gap-2 bg-indigo-100 p-3 border-t-[2px] border-white">

            <section className="flex justify-center items-center gap-3">
                
                <article onClick={()=>window.location.replace('https://www.linkedin.com/in/gabriel-henrique-47ab76188/')} className="rounded-full p-2 bg-blue-400 drop-shadow-lg hover:scale-105 cursor-pointer">
                    <LinkedinIcon className={`h-4 w-4  fill-white`}/>
                </article>

                <article onClick={()=>window.location.replace('https://github.com/gab-h3nrique')} className="rounded-full p-2 bg-blue-400 drop-shadow-lg hover:scale-105 cursor-pointer">
                    <GithubIcon className={`h-4 w-4  fill-white`}/>
                </article>

                <article onClick={()=>window.location.replace('https://www.instagram.com/gab_h3nriique/')} className="rounded-full p-2 bg-blue-400 drop-shadow-lg hover:scale-105 cursor-pointer">
                    <InstagramIcon className={`h-4 w-4  fill-white`}/>
                </article>

            </section>

            <section className="flex flex-col justify-center items-center gap-1">
                <p className="font-semibold text-white text-sm drop-shadow-lg">What is reality</p>
                <p className="font-semibold text-white text-base drop-shadow-lg">© {new Date().getFullYear()} Gabriel Henrique</p>
            </section>

        </article>
    </>
  )
  
}


