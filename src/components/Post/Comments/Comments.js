// @flow strict
import React from 'react';

type Props = {
  comments: boolean
};

const Comments = ({ comments }: Props) => {

  if (!comments) {
    return (<p>( Comments are currently disabled on <b>chun.si</b>. )</p>);
  }

  if (!comments) {
    return (<p>( Comments are disabled on this post. )</p>);
  }

  return (<p>( Comments are currently disabled on <b>chun.si</b>. )</p>);

  return (
    <script src="https://utteranc.es/client.js"
        repo="m4xic/chun.si"
        issue-term="pathname"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
    </script>
  );
};

export default Comments;
