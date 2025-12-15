import type { Metadata } from "next";
import { openSans, dancingScript } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Builder Finder",
  description:
    "A guide to help you choose the right website builder for your business, created by Janet Spellman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/dotsBackground.png"
          fetchPriority="high"
        />

        <link
          rel="preload"
          as="image"
          href="/images/transparent-logo-bright-small.webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${openSans.variable} ${dancingScript.variable} antialiased`}
      >
        <nav className="bg-blue-900 border-b-2 border-white py-2 px-6">
          {" "}
          <a href="https://janetspellman.com">
            <div className="flex align-baseline">
              <span className="font-dancing text-2xl text-white">
                {" "}
                Spellman&apos;s Consulting{" "}
              </span>

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAEQAHwAERCdlogAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+kMDwE0Gb6PLL0AAAf6SURBVFhH5Zh7cFTVHcc/5+59bTYhDx4BAkwSkaZqEVukg2iBFmyn2ooPtFQqg1ZqaaVTXmWAymhl2hmxUyudsVTQlgGESEGHQVsFsR3qYyhWsWiAQQoUEvLc3ezjvs7pHyEQdjfZBPJfPzP7zz3f+7uf/d1z7rm70B+s8wV/9Ibmi10OWr5Aj9QqwWZ/IGVMp1iszBpf7YRynHWRolv1Hse5UsGZQqFUEpN56Exks1fcOTR+t6d/+cbQ+JznPe92iFsaFJ+XLJxm5opemSDA/UYKl8eACBZXdR62C8UdVphf3PiGf2kXX3QtSrUVrPHCLNguif7VB0AIQdG0LJ8rFwRoVJ/gqd+hi5sA7vy7P7zMZtUgm2tGRxh9IbfBMyjRfo7FQ1SLpxhpXug4QndBZU2J/hH8oaFIsEEEKjJ8p2dYYZ4YFWHwsDAhy+brAPzB0ykVSwgxBVcto0EuYq7ReqFG7DVFfI+XWVpkHugtX9kvdeVJ0/NQQiAjmlIf/JeKr1bzpevKxTMVJpqr4GSKA6++L2cctsU96GIwSbWR2UY0X/1O8q6i7ggpNRaDNUU2eqmJb2oiqCrDGWwzeqyJViLAFWDY1EyoEtcermMf39cb8tXN5LI7eMNuX4woZXZFIatHFWIMCUEYKBZQBRQADnBcwTtpEsfjnDyR5FOpqENxREqOVUe0E1smaFm3tSuXLdjJY5/684cWsLxCECoBBgEDuow3AweBoyk4EoNWFzyFcH3+MlATC3bfEurxdl/xImlpVc+JgN9qIE06utgVmw7pMhMKdZCKJumzKPB4MJ8cXKngJl97/Rwj/nFMbW2XnAkAlREJzn9ciVKS3cpVt+2frG86ME0Psgtm07dFstHTiVBBSHwBjUkoaqJC7AoV8eF/AoYXaRABSun45gpIAvUB6lQbq0Mn5fq3Z5jpHq+RQd86aFKDLp5GZx0wCEctbPyWvj6t800l0GJAPdAANAFn6ZiDvgAkh3Z44ju85N3MOq/Xjemb4H3Gx0i24TGPVn7ATOOz6l1+uD1geqsL9RJiQCOoRjoEG4BoAI6G3RZTtdjMply8wDZvImvcnl8m6Kvgk57gnNzODH0XD+gSIBli7Ok01cdipNpS7MBjSaAIkj5vphTJ0x7UpxBNDgN4yEwQVYuBFAViM1Xa4zzr2T1dsm+CKw3FPPOSyd0sRVWTw9rP2pj6RI0+35KcsQW6JnnuRJKZx2McOpWAREAZAHPMdprkT3F5FUdt4VGjxznZ67kAMPc9x7JCKnyoXkT3324pAE9p207fKuTp85kBIarDoDRJ0/IavW7qPv/uOCweZBJ5/mi6OCZDcuHnjDgvuMvw8zcob6CTRQfTgyvK+PPAUnFs3EgmXxi4XciuuZBGlQDZ3K6aAd6aoscPTNFXjTTknqOaeLfFkP986ogznrlmiofNBHnoleC39ztD7EKxbZjJ9AqdSLlJSa7cpsO+SENVSpF2A+JdxwYVqESBRklpiErHYPucA86EXDUyySt411tORWkRteUmk2wILMmvBnnsypX1bbQYVLcpYlpE+F3Hlo4wPwt7PKgUrS4M8y22jdvr3JSrTld6FFzwnlvpFFJbWcDEUoGnBzyeiPLk/LHWJRfvJJ2msFUwNAqtCfPSTaW0WMilY6zXpMscV9FcZDJcM9lqvOJMylWrk24FF7/vXnXGVLU1xYyvMgh0n1WnG+RTC8ZZ3W5RHzlqWIOPcSagud7J2vUAWDrGel2kmRUJ0TQiQvmACFvZ6Vyc0xnkFJy6x6n+RFMvl4W5foyJa3n8rCWmfr1iYrjH/VPXxVUpHxF1OLfqGj2nIMAvr7H2iTQzh9s0XB1hiB5mKzudr+XKZgmKHc6QUyFelhrXluq4ms+SA6fk2h/dYF+yWnPhKyoBoTp2uB5Zc5213/a4Z6jF2cEGZdhsYqczMTOXJajrDFOCqwEMwckml1eenhrOKwfgKqqSPiLl05IvC3D8DP9qS7PP1gBBGQbXZ2ayBFVMfSx8HnMlXrtitBumduEHTkVmLheepNqVkA7yd/C7ex174DDWuBr3JSSKgFpSanNmLkvQv98OQlH1jJNm+Yl2nHMeNzphtn/jbWdkZrYrd77p24Gi3JGIpN+z4I5PvWK7jN80Bjx8KoVoc9hCVD3MPXYsM5tzkdTdZctkM8+ei7PkeBy3xeOLkSJ2PPKOU50rD+CFKXEVJSkfEi5N3eUe/ZtbsMeTaxsVcz+OIc6k2eS2i/nMspO58t0+Zg7eYcnms/y+Ps5PTiZIu4Kx0TA7Vn/gXpsrn5KUxn2KWz28uCSrEwAvfuSVaGXqhZM+99XFoSnN+qBJPMJMM6cc5HlQ191rqcQ5NjS28+Nmh1QCPv9uoF6autepzMzGA0YlfPR2j1TcJ+uCt73hFOz15fpjLjOOJZDNKdb5CbGQ75luZrYred9mjtxrqeI/pTfKocL3FWtDGjXJEJOBE11zLR5VhgIBKccllVmn0aD6bJrpqQDVmOTZaItY4c/qWQ56IQgQfcBWYmN6i4toLjG5eYxi94cZmZaASk2hlCLlJVWW4IkW6sIDWJaUyJao2CB7IQf98LsYwNzpi5DJVqFxSyD5xDvoT5Mr8z/Ye0OvOpgPDzRPUSkCkIoY/SQHvXjd6g3KUQUKys9bdfuIuRz6RRBLVHLxbtR3H+w7/XKLCVGFohnFegI25Yv3hf4R9Pg3Sk3m7i5/SP6/8D/oqlwF+U7AwQAAAABJRU5ErkJggg=="
                alt="logo for spellman's consulting its a blue code symbol </> with a wand in place of the slash"
                className="ml-2"
                height="30"
                width="30"
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  display: "block",
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
