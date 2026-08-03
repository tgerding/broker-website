/**
 * Renders hidden static forms so Netlify's build-time bot detects and registers them.
 * Real interactive forms (ContactForm, NotifyForm) POST url-encoded data to `/`
 * with matching `form-name` values.
 */
export function NetlifyFormsHidden() {
  return (
    <div hidden aria-hidden="true">
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="bot-field" />
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="interest" />
        <input type="text" name="propertyAddress" />
        <textarea name="message"></textarea>
      </form>
      <form name="notify" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="bot-field" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="criteria" />
      </form>
    </div>
  );
}
