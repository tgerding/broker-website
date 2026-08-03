import { contact } from "@/lib/content";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { ContactBlocks } from "@/components/marketing/ContactBlocks";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Reach out to Tyler Gerding — Principal Broker and multifamily advisor. Portland, Oregon.",
};

export default function ContactPage() {
  return (
    <>
      <div className="split">
        <div className="cl">
          <div>
            <EyebrowHeader eyebrow={contact.left.eyebrow} />
            <h1
              className="cl-h1"
              dangerouslySetInnerHTML={{ __html: contact.left.headlineHtml }}
            />
            <p className="cl-intro">{contact.left.intro}</p>
            <ContactBlocks
              variant="contact"
              locationSub="Serving Portland metro · Newberg · McMinnville · Salem · Albany"
            />
          </div>
          <p
            className="cl-note"
            dangerouslySetInnerHTML={{
              __html: contact.left.note.replace(/\n/g, "<br />"),
            }}
          />
        </div>

        <div className="cr">
          <div className="form-title">{contact.form.title}</div>
          <ContactForm />
        </div>
      </div>

      <div className="reassurance">
        {contact.reassurance.map((r) => (
          <div key={r.title} className="ri">
            <div className="ri-title">{r.title}</div>
            <p className="ri-body">{r.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
