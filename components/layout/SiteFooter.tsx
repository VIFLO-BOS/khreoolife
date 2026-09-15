import Link from "next/link";

function FooterLogo() {
  return (
    <span className="inline-flex items-center gap-3 text-white">
      <span className="relative block size-10 shrink-0">
        <span className="absolute left-[3px] top-0 text-[23px] font-black leading-none tracking-[-3px]">ee</span>
        <span className="absolute bottom-[3px] left-[9px] h-[11px] w-[21px] rounded-b-[22px] border-4 border-t-0 border-current" />
      </span>
      <span className="text-[27px] font-black tracking-[-.055em]">Khreeolife</span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#101011] py-20 text-white">
      <div className="site-container">
        <div className="grid grid-cols-[1.45fr_repeat(3,1fr)] gap-14 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <Link href="/"><FooterLogo /></Link>
            <p className="mt-5 max-w-[350px] text-sm leading-6 text-white/60">
              The Ordained Life — transforming people and communities through the love of God in words and deeds.
            </p>
            <span className="sticker mt-3">the ordained life</span>
          </div>
          <div>
            <h3 className="mb-4 text-[9px] font-black uppercase tracking-[.13em] text-white/45">Quick Links</h3>
            {[["Home","/"],["Projects","/projects"],["Events","/events"],["Blog","/blog"],["About","/about"]].map(([label,href]) => <Link className="my-2 block text-[13px] text-white/75 hover:text-yellow" key={href} href={href}>{label}</Link>)}
          </div>
          <div>
            <h3 className="mb-4 text-[9px] font-black uppercase tracking-[.13em] text-white/45">Get Involved</h3>
            <Link href="/get-involved" className="my-2 block text-[13px] text-white/75 hover:text-yellow">Volunteer</Link>
            <Link href="/get-involved" className="my-2 block text-[13px] text-white/75 hover:text-yellow">Sponsor</Link>
            <Link href="/donate" className="my-2 block text-[13px] text-white/75 hover:text-yellow">Donate Now</Link>
          </div>
          <div>
            <h3 className="mb-4 text-[9px] font-black uppercase tracking-[.13em] text-white/45">Connect</h3>
            <a href="https://instagram.com/theordainedlife" target="_blank" rel="noreferrer" className="my-2 block text-[13px] text-white/75 hover:text-yellow">@theordainedlife</a>
            <span className="my-2 block text-[13px] text-white/50">Contact Email</span>
            <span className="my-2 block text-[13px] text-white/50">Contact Phone</span>
          </div>
        </div>
        <div className="mt-12 flex justify-between gap-5 border-t border-white/15 pt-5 text-[10px] text-white/40 max-md:flex-col">
          <span>© 2026 Khreeolife — The Ordained Life. All Rights Reserved.</span>
          <span>Community Development · Education · Christian Missions</span>
        </div>
      </div>
    </footer>
  );
}
