"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import { BrandMark } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import { images, projects } from "@/data/site";

type ApplicationType = "volunteer" | "sponsor";

export function InvolvementApplication() {
  const [activeApplication, setActiveApplication] =
    useState<ApplicationType>("volunteer");
  const [submittedApplication, setSubmittedApplication] =
    useState<ApplicationType | null>(null);
  const applicationRef = useRef<HTMLElement>(null);

  function selectApplication(
    application: ApplicationType,
    shouldScroll = false,
  ) {
    setActiveApplication(application);
    setSubmittedApplication(null);

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        applicationRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedApplication(activeApplication);
  }

  return (
    <>
      <section
        className="py-[112px] tablet:py-[78px]"
        aria-labelledby="pathways-title"
      >
        <div className="container-page">
          <Reveal className="mb-[52px] grid grid-cols-[1fr_.72fr] items-end gap-[85px] laptop:grid-cols-1 laptop:gap-[35px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal [&_.rich-intro-copy]:border-t [&_.rich-intro-copy]:border-ink [&_.rich-intro-copy]:pt-[18px] [&_.rich-intro-copy_p]:max-w-[560px] [&_.rich-intro-copy_p]:text-[16px] [&_.rich-intro-copy_p]:text-muted">
            <div>
              <p className="eyebrow">Choose a pathway</p>
              <h2 id="pathways-title" className="display-2">
                Two ways to step in.
              </h2>
            </div>
            <div className="rich-intro-copy">
              <p>
                Volunteer in transformational outreach or sponsor the work
                financially, in-kind or through partnership.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 laptop:grid-cols-1">
            <Reveal className="group relative overflow-hidden rounded-[28px] border border-ink bg-white">
              <div className="relative h-[430px] overflow-hidden tablet:h-[330px] photo [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.035]">
                <SiteImage
                  alt="Volunteers working together"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  src={images.volunteering}
                />
              </div>
              <span className="absolute top-[18px] right-[18px] grid size-12 place-items-center rounded-full bg-paper text-[10px] font-black text-ink">
                01
              </span>
              <div className="p-[30px] [&_h3]:mb-[14px] [&_h3]:font-display [&_h3]:text-[40px] [&_h3]:leading-none [&_h3]:font-normal [&_p:not(.eyebrow)]:text-[14px] [&_p:not(.eyebrow)]:text-muted">
                <p className="eyebrow">Volunteer</p>
                <h3>Give your presence and ability.</h3>
                <p>
                  Volunteers participate in transformational outreach and
                  service. Areas of interest include Community Development,
                  Education and Missions.
                </p>
                <button
                  type="button"
                  className="mt-[22px] btn btn-dark"
                  onClick={() => selectApplication("volunteer", true)}
                >
                  Volunteer Application{" "}
                  <ArrowDown aria-hidden="true" size={15} />
                </button>
              </div>
            </Reveal>
            <Reveal className="group relative overflow-hidden rounded-[28px] border border-ink bg-brand text-white">
              <div className="relative h-[430px] overflow-hidden tablet:h-[330px] photo [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.035]">
                <SiteImage
                  alt="People discussing a partnership"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  src={images.partnership}
                />
              </div>
              <span className="absolute top-[18px] right-[18px] grid size-12 place-items-center rounded-full bg-paper text-[10px] font-black text-ink">
                02
              </span>
              <div className="p-[30px] [&_h3]:mb-[14px] [&_h3]:font-display [&_h3]:text-[40px] [&_h3]:leading-none [&_h3]:font-normal [&_p:not(.eyebrow)]:text-[14px] [&_p:not(.eyebrow)]:text-white/72">
                <p className="eyebrow">Sponsor</p>
                <h3>Put resources behind a project.</h3>
                <p>
                  Sponsorship may be Financial, In-Kind or Partnership-based and
                  can be directed toward specific Khreeolife projects.
                </p>
                <button
                  type="button"
                  className="mt-[22px] btn btn-light"
                  onClick={() => selectApplication("sponsor", true)}
                >
                  Sponsor Application <ArrowDown aria-hidden="true" size={15} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-[100px]" aria-labelledby="process-title">
        <div className="container-page">
          <Reveal className="mb-[60px] grid grid-cols-[1fr_.55fr] items-end gap-[60px] laptop:grid-cols-1 laptop:gap-6 [&>p]:max-w-[460px] [&>p]:text-[16px] [&>p]:text-muted">
            <div>
              <p className="eyebrow">What happens next</p>
              <h2 id="process-title" className="display-2">
                Simple in V1.
                <br />
                Human by design.
              </h2>
            </div>
            <p>
              The architecture keeps this first version straightforward: choose
              a pathway, prepare your interest details and contact the team
              directly.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-4 border-t border-ink tablet:grid-cols-1 [&>article]:min-h-[200px] [&>article]:border-r [&>article]:border-ink [&>article]:p-[26px] [&>article]:px-7 [&>article:last-child]:border-r-0 tablet:[&>article]:min-h-0 tablet:[&>article]:border-r-0 tablet:[&>article]:border-b tablet:[&>article:last-child]:border-b-0 [&>article>span]:text-[10px] [&>article>span]:font-black [&>article>span]:text-brand [&_h3]:mt-10 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:font-normal [&_p]:text-[13px] [&_p]:text-muted">
            <article>
              <span>01</span>
              <h3>Choose</h3>
              <p>Volunteer or sponsor.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Tell us</h3>
              <p>Complete the relevant interest form.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Prepare</h3>
              <p>Review the relevant interest details.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Connect</h3>
              <p>Use the contact email to begin a conversation.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section
        ref={applicationRef}
        className="bg-cream py-[112px] tablet:py-[78px]"
        id="application"
      >
        <div className="container-page">
          <Reveal className="grid overflow-hidden rounded-[30px] border border-ink bg-white grid-cols-[.72fr_1.28fr] laptop:grid-cols-1">
            <aside className="flex min-h-[760px] flex-col justify-between bg-brand-dark p-12 text-white laptop:min-h-[360px] tablet:p-7 [&_h2]:mb-[18px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,68px)] [&_h2]:leading-[.98] [&_h2]:font-normal [&_p:not(.eyebrow)]:text-white/70">
              <div>
                <p className="eyebrow">Application</p>
                <h2 className="display-2">Take the next step.</h2>
                <p>Choose the form that fits how you want to contribute.</p>
              </div>
              <div className="flex items-center gap-[15px] font-display text-[20px]">
                <BrandMark />
                <span>The Ordained Life</span>
              </div>
            </aside>
            <div className="p-12 tablet:p-7">
              <div
                className="mb-[30px] flex gap-[6px] border-b border-ink pb-[14px]"
                aria-label="Application type"
              >
                <button
                  type="button"
                  className={`min-h-[38px] cursor-pointer rounded-full border border-ink bg-transparent px-[15px] text-[10px] font-black hover:bg-ink hover:text-white ${activeApplication === "volunteer" ? "bg-ink text-white" : ""}`}
                  aria-pressed={activeApplication === "volunteer"}
                  onClick={() => selectApplication("volunteer")}
                >
                  Volunteer
                </button>
                <button
                  type="button"
                  className={`min-h-[38px] cursor-pointer rounded-full border border-ink bg-transparent px-[15px] text-[10px] font-black hover:bg-ink hover:text-white ${activeApplication === "sponsor" ? "bg-ink text-white" : ""}`}
                  aria-pressed={activeApplication === "sponsor"}
                  onClick={() => selectApplication("sponsor")}
                >
                  Sponsor
                </button>
              </div>

              {activeApplication === "volunteer" ? (
                <form onSubmit={submitApplication}>
                  <div className="mb-7 flex justify-between gap-5 border-b border-ink pb-[14px] tablet:flex-col tablet:gap-2.5 [&>span]:font-black [&_small]:text-muted">
                    <span>Volunteer Application</span>
                    <small>
                      All fields follow the V1 website architecture.
                    </small>
                  </div>
                  <div className="grid grid-cols-2 gap-[18px] tablet:grid-cols-1">
                    <Field
                      label="Full Name"
                      name="fullName"
                      placeholder="Your full name"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      type="email"
                    />
                    <Field
                      label="Phone Number"
                      name="phone"
                      placeholder="+234 ..."
                      type="tel"
                    />
                    <Field
                      label="Location"
                      name="location"
                      placeholder="City / State"
                    />
                    <SelectField
                      label="Area of Interest"
                      name="area"
                      options={[
                        "Community Development",
                        "Education",
                        "Christian Missions",
                      ]}
                      full
                    />
                    <Field
                      label="Availability"
                      name="availability"
                      placeholder="Weekends / monthly / etc."
                    />
                    <TextAreaField
                      label="Why do you want to volunteer?"
                      name="motivation"
                      placeholder="Tell the team what draws you to the work."
                    />
                    <div className="col-[1/-1] grid gap-2 tablet:col-auto">
                      <button
                        type="submit"
                        className="btn btn-brand"
                      >
                        Submit Volunteer Application{" "}
                        <ArrowRight aria-hidden="true" size={15} />
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <form onSubmit={submitApplication}>
                  <div className="mb-7 flex justify-between gap-5 border-b border-ink pb-[14px] tablet:flex-col tablet:gap-2.5 [&>span]:font-black [&_small]:text-muted">
                    <span>Sponsor Application</span>
                    <small>Financial, In-Kind or Partnership interest.</small>
                  </div>
                  <div className="grid grid-cols-2 gap-[18px] tablet:grid-cols-1">
                    <Field
                      label="Name / Organisation"
                      name="name"
                      placeholder="Name or organisation"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      type="email"
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      placeholder="+234 ..."
                      type="tel"
                    />
                    <SelectField
                      label="Type of Sponsorship Interest"
                      name="sponsorshipType"
                      options={["Financial", "In-Kind", "Partnership"]}
                    />
                    <SelectField
                      label="Which Project(s) do you wish to support?"
                      name="project"
                      options={projects.map((project) => project.title)}
                      full
                    />
                    <div className="col-[1/-1] grid gap-2 tablet:col-auto">
                      <button
                        type="submit"
                        className="btn btn-brand"
                      >
                        Submit Sponsor Application{" "}
                        <ArrowRight aria-hidden="true" size={15} />
                      </button>
                    </div>
                  </div>
                </form>
              )}

              <p
                className="mt-[30px] text-[11px] leading-[1.55] text-muted [&_a]:font-black [&_a]:text-brand-dark [&_a]:underline"
                aria-live="polite"
              >
                {submittedApplication ? (
                  <>
                    This prototype does not transmit or store your{" "}
                    {submittedApplication} details. To express interest,
                    email{" "}
                  </>
                ) : (
                  <>
                    This form is a local prototype and does not transmit or
                    store personal details. To express interest, email{" "}
                  </>
                )}
                <a href="mailto:hello@khreeolife.org">hello@khreeolife.org</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel" | "text";
}

function Field({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: FieldProps) {
  const id = `involvement-${name}`;

  return (
    <div className="field-compact">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}

interface SelectFieldProps {
  full?: boolean;
  label: string;
  name: string;
  options: string[];
}

function SelectField({ full = false, label, name, options }: SelectFieldProps) {
  const id = `involvement-${name}`;

  return (
    <div
      className={`field-compact ${full ? "col-[1/-1] tablet:col-auto" : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue={options[0]}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder: string;
}

function TextAreaField({ label, name, placeholder }: TextAreaFieldProps) {
  const id = `involvement-${name}`;

  return (
    <div className="field-compact col-[1/-1] tablet:col-auto">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} placeholder={placeholder} />
    </div>
  );
}
