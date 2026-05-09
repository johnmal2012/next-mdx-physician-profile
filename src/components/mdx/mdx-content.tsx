import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface Props {
  source: string;
}

export default function MdxContent({
  source,
}: Props) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={{
        h1: (props) => (
          <h1
            className="mt-8 mb-4 text-4xl font-bold"
            {...props}
          />
        ),

        h2: (props) => (
          <h2
            className="mt-8 mb-4 text-3xl font-bold"
            {...props}
          />
        ),

        h3: (props) => (
          <h3
            className="mt-6 mb-3 text-2xl font-semibold"
            {...props}
          />
        ),

        p: (props) => (
          <p
            className="mb-4 leading-7 text-slate-700"
            {...props}
          />
        ),

        ul: (props) => (
          <ul
            className="mb-4 ml-6 list-disc space-y-2"
            {...props}
          />
        ),

        ol: (props) => (
          <ol
            className="mb-4 ml-6 list-decimal space-y-2"
            {...props}
          />
        ),

        li: (props) => (
          <li className="text-slate-700" {...props} />
        ),

        table: (props) => (
          <table
            className="mb-6 w-full border-collapse overflow-hidden rounded-xl border border-slate-200"
            {...props}
          />
        ),

        thead: (props) => (
          <thead
            className="bg-slate-200"
            {...props}
          />
        ),

        th: (props) => (
          <th
            className="border border-slate-100 px-4 py-3 text-left font-semibold"
            {...props}
          />
        ),
        tr: (props) => (
          <tr
            className="even:bg-slate-100"
            {...props}
          />
        ),
        // to bold first column: first:font-semibold
        td: (props) => (
          <td
            className="border border-slate-200 px-4 py-3"
            {...props}
          />
        ),
      }}
    />
  );
}