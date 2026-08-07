/**
 * Renders a JSON-LD structured-data block in the initial server HTML so search
 * and generative-AI crawlers can read it without executing JavaScript. The `<`
 * escape prevents the serialized JSON from breaking out of the script element.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
