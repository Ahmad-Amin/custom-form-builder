import React from "react";

const StepsSections = () => {
  return (
    <div className=" p-20">
      <div className=" flex flex-row gap-3">
        <div className=" w-20 h-20 rounded-tl-xl rounded-br-xl rounded-tr-xl bg-[#CBE4DE]"></div>
        <div className=" flex items-start">
          <svg
            width="268"
            height="32"
            viewBox="0 0 268 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.900151 30.3659C0.6504 30.4837 0.543441 30.7817 0.66125 31.0315C0.77906 31.2812 1.07703 31.3882 1.32678 31.2704L0.900151 30.3659ZM267.647 30.8181L264.332 26.0907L261.896 31.3248L267.647 30.8181ZM1.32678 31.2704C2.26799 30.8264 3.21179 30.387 4.15813 29.9521L3.74061 29.0435C2.79123 29.4797 1.8444 29.9205 0.900151 30.3659L1.32678 31.2704ZM9.86059 27.4011C11.7683 26.5706 13.6859 25.7587 15.6132 24.9654L15.2326 24.0407C13.2991 24.8365 11.3753 25.6511 9.46143 26.4842L9.86059 27.4011ZM21.4137 22.646C23.3531 21.8931 25.3018 21.159 27.2597 20.4439L26.9166 19.5046C24.9524 20.222 22.9974 20.9584 21.0518 21.7138L21.4137 22.646ZM33.1491 18.3601C35.1169 17.6861 37.0936 17.0312 39.0789 16.3956L38.774 15.4432C36.7823 16.0808 34.7992 16.7379 32.825 17.4141L33.1491 18.3601ZM45.0477 14.5508C47.0408 13.9568 49.0422 13.3821 51.0517 12.827L50.7855 11.8631C48.7694 12.42 46.7616 12.9965 44.7621 13.5925L45.0477 14.5508ZM57.0904 11.2244C59.1054 10.7112 61.1282 10.2177 63.1587 9.74404L62.9315 8.77019C60.8945 9.24542 58.8651 9.74052 56.8436 10.2553L57.0904 11.2244ZM69.2573 8.38586C71.291 7.9544 73.3319 7.54273 75.38 7.15107L75.1922 6.16887C73.1375 6.56179 71.09 6.97478 69.0497 7.40764L69.2573 8.38586ZM81.5281 6.03928C83.5773 5.68993 85.6333 5.36054 87.6959 5.05132L87.5476 4.06237C85.4784 4.37258 83.4158 4.70303 81.36 5.05351L81.5281 6.03928ZM93.8831 4.18702C95.9446 3.92006 98.0124 3.6732 100.086 3.44664L99.9777 2.45256C97.8971 2.67983 95.8228 2.92748 93.7547 3.1953L93.8831 4.18702ZM106.302 2.83021C108.373 2.64569 110.449 2.48138 112.531 2.33748L112.462 1.33986C110.374 1.48421 108.291 1.64905 106.214 1.83415L106.302 2.83021ZM118.766 1.96854C120.842 1.86632 122.923 1.78436 125.01 1.72287L124.98 0.723305C122.887 0.784988 120.8 0.867202 118.717 0.969752L118.766 1.96854ZM131.255 1.60028C132.295 1.59007 133.337 1.58496 134.38 1.58496V0.584961C133.334 0.584961 132.289 0.59009 131.245 0.600324L131.255 1.60028ZM134.38 1.58496C135.423 1.58496 136.465 1.59007 137.505 1.60028L137.515 0.600324C136.471 0.59009 135.426 0.584961 134.38 0.584961V1.58496ZM143.751 1.72287C145.837 1.78436 147.918 1.86631 149.994 1.96854L150.043 0.969751C147.961 0.867201 145.873 0.784988 143.78 0.723304L143.751 1.72287ZM156.229 2.33747C158.311 2.48138 160.387 2.64569 162.458 2.83021L162.547 1.83415C160.469 1.64905 158.387 1.48421 156.298 1.33985L156.229 2.33747ZM168.674 3.44664C170.748 3.6732 172.816 3.92006 174.877 4.18702L175.006 3.1953C172.938 2.92748 170.863 2.67983 168.783 2.45256L168.674 3.44664ZM181.064 5.05132C183.127 5.36054 185.183 5.68993 187.232 6.03929L187.4 5.05351C185.345 4.70303 183.282 4.37258 181.213 4.06238L181.064 5.05132ZM193.38 7.15107C195.428 7.54273 197.469 7.9544 199.503 8.38587L199.711 7.40764C197.67 6.97479 195.623 6.56179 193.568 6.16887L193.38 7.15107ZM205.602 9.74404C207.632 10.2177 209.655 10.7112 211.67 11.2244L211.917 10.2553C209.895 9.74052 207.866 9.24542 205.829 8.77019L205.602 9.74404ZM217.709 12.827C219.718 13.3821 221.72 13.9568 223.713 14.5508L223.998 13.5925C221.999 12.9965 219.991 12.42 217.975 11.8631L217.709 12.827ZM229.681 16.3956C231.667 17.0312 233.643 17.6861 235.611 18.3601L235.935 17.4141C233.961 16.7379 231.978 16.0808 229.986 15.4432L229.681 16.3956ZM241.501 20.4439C243.459 21.159 245.407 21.8931 247.347 22.646L247.708 21.7138C245.763 20.9584 243.808 20.222 241.844 19.5046L241.501 20.4439ZM253.147 24.9654C255.074 25.7586 256.992 26.5706 258.9 27.4011L259.299 26.4842C257.385 25.6511 255.461 24.8365 253.528 24.0407L253.147 24.9654ZM0.900151 30.3659C0.6504 30.4837 0.543441 30.7817 0.66125 31.0315C0.77906 31.2812 1.07703 31.3882 1.32678 31.2704L0.900151 30.3659ZM267.647 30.8181L264.332 26.0907L261.896 31.3248L267.647 30.8181ZM1.32678 31.2704C2.26799 30.8264 3.21179 30.387 4.15813 29.9521L3.74061 29.0435C2.79123 29.4797 1.8444 29.9205 0.900151 30.3659L1.32678 31.2704ZM9.86059 27.4011C11.7683 26.5706 13.6859 25.7587 15.6132 24.9654L15.2326 24.0407C13.2991 24.8365 11.3753 25.6511 9.46143 26.4842L9.86059 27.4011ZM21.4137 22.646C23.3531 21.8931 25.3018 21.159 27.2597 20.4439L26.9166 19.5046C24.9524 20.222 22.9974 20.9584 21.0518 21.7138L21.4137 22.646ZM33.1491 18.3601C35.1169 17.6861 37.0936 17.0312 39.0789 16.3956L38.774 15.4432C36.7823 16.0808 34.7992 16.7379 32.825 17.4141L33.1491 18.3601ZM45.0477 14.5508C47.0408 13.9568 49.0422 13.3821 51.0517 12.827L50.7855 11.8631C48.7694 12.42 46.7616 12.9965 44.7621 13.5925L45.0477 14.5508ZM57.0904 11.2244C59.1054 10.7112 61.1282 10.2177 63.1587 9.74404L62.9315 8.77019C60.8945 9.24542 58.8651 9.74052 56.8436 10.2553L57.0904 11.2244ZM69.2573 8.38586C71.291 7.9544 73.3319 7.54273 75.38 7.15107L75.1922 6.16887C73.1375 6.56179 71.09 6.97478 69.0497 7.40764L69.2573 8.38586ZM81.5281 6.03928C83.5773 5.68993 85.6333 5.36054 87.6959 5.05132L87.5476 4.06237C85.4784 4.37258 83.4158 4.70303 81.36 5.05351L81.5281 6.03928ZM93.8831 4.18702C95.9446 3.92006 98.0124 3.6732 100.086 3.44664L99.9777 2.45256C97.8971 2.67983 95.8228 2.92748 93.7547 3.1953L93.8831 4.18702ZM106.302 2.83021C108.373 2.64569 110.449 2.48138 112.531 2.33748L112.462 1.33986C110.374 1.48421 108.291 1.64905 106.214 1.83415L106.302 2.83021ZM118.766 1.96854C120.842 1.86632 122.923 1.78436 125.01 1.72287L124.98 0.723305C122.887 0.784988 120.8 0.867202 118.717 0.969752L118.766 1.96854ZM131.255 1.60028C132.295 1.59007 133.337 1.58496 134.38 1.58496V0.584961C133.334 0.584961 132.289 0.59009 131.245 0.600324L131.255 1.60028ZM134.38 1.58496C135.423 1.58496 136.465 1.59007 137.505 1.60028L137.515 0.600324C136.471 0.59009 135.426 0.584961 134.38 0.584961V1.58496ZM143.751 1.72287C145.837 1.78436 147.918 1.86631 149.994 1.96854L150.043 0.969751C147.961 0.867201 145.873 0.784988 143.78 0.723304L143.751 1.72287ZM156.229 2.33747C158.311 2.48138 160.387 2.64569 162.458 2.83021L162.547 1.83415C160.469 1.64905 158.387 1.48421 156.298 1.33985L156.229 2.33747ZM168.674 3.44664C170.748 3.6732 172.816 3.92006 174.877 4.18702L175.006 3.1953C172.938 2.92748 170.863 2.67983 168.783 2.45256L168.674 3.44664ZM181.064 5.05132C183.127 5.36054 185.183 5.68993 187.232 6.03929L187.4 5.05351C185.345 4.70303 183.282 4.37258 181.213 4.06238L181.064 5.05132ZM193.38 7.15107C195.428 7.54273 197.469 7.9544 199.503 8.38587L199.711 7.40764C197.67 6.97479 195.623 6.56179 193.568 6.16887L193.38 7.15107ZM205.602 9.74404C207.632 10.2177 209.655 10.7112 211.67 11.2244L211.917 10.2553C209.895 9.74052 207.866 9.24542 205.829 8.77019L205.602 9.74404ZM217.709 12.827C219.718 13.3821 221.72 13.9568 223.713 14.5508L223.998 13.5925C221.999 12.9965 219.991 12.42 217.975 11.8631L217.709 12.827ZM229.681 16.3956C231.667 17.0312 233.643 17.6861 235.611 18.3601L235.935 17.4141C233.961 16.7379 231.978 16.0808 229.986 15.4432L229.681 16.3956ZM241.501 20.4439C243.459 21.159 245.407 21.8931 247.347 22.646L247.708 21.7138C245.763 20.9584 243.808 20.222 241.844 19.5046L241.501 20.4439ZM253.147 24.9654C255.074 25.7586 256.992 26.5706 258.9 27.4011L259.299 26.4842C257.385 25.6511 255.461 24.8365 253.528 24.0407L253.147 24.9654Z"
              fill="#AFAFAF"
            />
          </svg>
        </div>
        <div className=" w-20 h-20 rounded-tl-xl rounded-br-xl rounded-tr-xl bg-[#CBE4DE]"></div>
        <svg
          width="268"
          height="32"
          viewBox="0 0 268 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.344304 1.27714C0.0945531 1.15933 -0.0124064 0.861366 0.105403 0.611615C0.223213 0.361864 0.521179 0.254905 0.77093 0.372714L0.344304 1.27714ZM267.091 0.824928L263.777 5.55232L261.34 0.318292L267.091 0.824928ZM0.77093 0.372714C1.71215 0.816694 2.65594 1.25611 3.60228 1.69093L3.18477 2.5996C2.23538 2.16338 1.28855 1.72255 0.344304 1.27714L0.77093 0.372714ZM9.30474 4.24194C11.2124 5.07243 13.13 5.88441 15.0573 6.67767L14.6767 7.6024C12.7432 6.80659 10.8194 5.99199 8.90559 5.15883L9.30474 4.24194ZM20.8579 8.9971C22.7972 9.75 24.7459 10.4841 26.7038 11.1991L26.3608 12.1384C24.3966 11.4211 22.4416 10.6846 20.496 9.92931L20.8579 8.9971ZM32.5932 13.283C34.561 13.957 36.5377 14.6119 38.523 15.2475L38.2181 16.1999C36.2264 15.5622 34.2433 14.9052 32.2692 14.229L32.5932 13.283ZM44.4919 17.0923C46.4849 17.6863 48.4863 18.261 50.4959 18.816L50.2296 19.7799C48.2136 19.2231 46.2057 18.6465 44.2062 18.0506L44.4919 17.0923ZM56.5345 20.4187C58.5495 20.9318 60.5724 21.4253 62.6028 21.899L62.3756 22.8729C60.3386 22.3976 58.3093 21.9025 56.2877 21.3878L56.5345 20.4187ZM68.7014 23.2572C70.7351 23.6887 72.7761 24.1003 74.8242 24.492L74.6364 25.4742C72.5817 25.0813 70.5341 24.6683 68.4939 24.2354L68.7014 23.2572ZM80.9722 25.6038C83.0214 25.9531 85.0774 26.2825 87.14 26.5917L86.9918 27.5807C84.9225 27.2705 82.8599 26.94 80.8041 26.5896L80.9722 25.6038ZM93.3273 27.456C95.3887 27.723 97.4565 27.9699 99.5304 28.1964L99.4218 29.1905C97.3413 28.9632 95.2669 28.7156 93.1989 28.4478L93.3273 27.456ZM105.747 28.8129C107.817 28.9974 109.893 29.1617 111.975 29.3056L111.906 30.3032C109.818 30.1589 107.735 29.994 105.658 29.8089L105.747 28.8129ZM118.21 29.6745C120.286 29.7768 122.368 29.8587 124.454 29.9202L124.424 30.9198C122.331 30.8581 120.244 30.7759 118.161 30.6733L118.21 29.6745ZM130.699 30.0428C131.74 30.053 132.781 30.0581 133.824 30.0581V31.0581C132.778 31.0581 131.733 31.053 130.689 31.0427L130.699 30.0428ZM133.824 30.0581C134.867 30.0581 135.909 30.053 136.949 30.0428L136.959 31.0427C135.916 31.053 134.871 31.0581 133.824 31.0581V30.0581ZM143.195 29.9202C145.281 29.8587 147.362 29.7768 149.438 29.6745L149.487 30.6733C147.405 30.7759 145.317 30.8581 143.224 30.9198L143.195 29.9202ZM155.673 29.3056C157.755 29.1617 159.831 28.9974 161.902 28.8129L161.991 29.8089C159.914 29.994 157.831 30.1589 155.742 30.3032L155.673 29.3056ZM168.118 28.1964C170.192 27.9699 172.26 27.723 174.321 27.456L174.45 28.4478C172.382 28.7156 170.307 28.9632 168.227 29.1905L168.118 28.1964ZM180.509 26.5917C182.571 26.2825 184.627 25.9531 186.676 25.6038L186.844 26.5896C184.789 26.94 182.726 27.2705 180.657 27.5807L180.509 26.5917ZM192.824 24.492C194.873 24.1003 196.914 23.6887 198.947 23.2572L199.155 24.2354C197.115 24.6683 195.067 25.0813 193.012 25.4742L192.824 24.492ZM205.046 21.899C207.076 21.4253 209.099 20.9318 211.114 20.4187L211.361 21.3878C209.339 21.9025 207.31 22.3976 205.273 22.8729L205.046 21.899ZM217.153 18.816C219.162 18.261 221.164 17.6863 223.157 17.0923L223.442 18.0506C221.443 18.6465 219.435 19.2231 217.419 19.7799L217.153 18.816ZM229.126 15.2475C231.111 14.6119 233.088 13.957 235.055 13.283L235.379 14.229C233.405 14.9052 231.422 15.5622 229.43 16.1999L229.126 15.2475ZM240.945 11.1991C242.903 10.4841 244.851 9.75 246.791 8.9971L247.153 9.92932C245.207 10.6846 243.252 11.4211 241.288 12.1384L240.945 11.1991ZM252.591 6.67767C254.519 5.88442 256.436 5.07244 258.344 4.24195L258.743 5.15884C256.829 5.992 254.905 6.8066 252.972 7.60241L252.591 6.67767ZM0.344304 1.27714C0.0945531 1.15933 -0.0124064 0.861366 0.105403 0.611615C0.223213 0.361864 0.521179 0.254905 0.77093 0.372714L0.344304 1.27714ZM267.091 0.824928L263.777 5.55232L261.34 0.318292L267.091 0.824928ZM0.77093 0.372714C1.71215 0.816694 2.65594 1.25611 3.60228 1.69093L3.18477 2.5996C2.23538 2.16338 1.28855 1.72255 0.344304 1.27714L0.77093 0.372714ZM9.30474 4.24194C11.2124 5.07243 13.13 5.88441 15.0573 6.67767L14.6767 7.6024C12.7432 6.80659 10.8194 5.99199 8.90559 5.15883L9.30474 4.24194ZM20.8579 8.9971C22.7972 9.75 24.7459 10.4841 26.7038 11.1991L26.3608 12.1384C24.3966 11.4211 22.4416 10.6846 20.496 9.92931L20.8579 8.9971ZM32.5932 13.283C34.561 13.957 36.5377 14.6119 38.523 15.2475L38.2181 16.1999C36.2264 15.5622 34.2433 14.9052 32.2692 14.229L32.5932 13.283ZM44.4919 17.0923C46.4849 17.6863 48.4863 18.261 50.4959 18.816L50.2296 19.7799C48.2136 19.2231 46.2057 18.6465 44.2062 18.0506L44.4919 17.0923ZM56.5345 20.4187C58.5495 20.9318 60.5724 21.4253 62.6028 21.899L62.3756 22.8729C60.3386 22.3976 58.3093 21.9025 56.2877 21.3878L56.5345 20.4187ZM68.7014 23.2572C70.7351 23.6887 72.7761 24.1003 74.8242 24.492L74.6364 25.4742C72.5817 25.0813 70.5341 24.6683 68.4939 24.2354L68.7014 23.2572ZM80.9722 25.6038C83.0214 25.9531 85.0774 26.2825 87.14 26.5917L86.9918 27.5807C84.9225 27.2705 82.8599 26.94 80.8041 26.5896L80.9722 25.6038ZM93.3273 27.456C95.3887 27.723 97.4565 27.9699 99.5304 28.1964L99.4218 29.1905C97.3413 28.9632 95.2669 28.7156 93.1989 28.4478L93.3273 27.456ZM105.747 28.8129C107.817 28.9974 109.893 29.1617 111.975 29.3056L111.906 30.3032C109.818 30.1589 107.735 29.994 105.658 29.8089L105.747 28.8129ZM118.21 29.6745C120.286 29.7768 122.368 29.8587 124.454 29.9202L124.424 30.9198C122.331 30.8581 120.244 30.7759 118.161 30.6733L118.21 29.6745ZM130.699 30.0428C131.74 30.053 132.781 30.0581 133.824 30.0581V31.0581C132.778 31.0581 131.733 31.053 130.689 31.0427L130.699 30.0428ZM133.824 30.0581C134.867 30.0581 135.909 30.053 136.949 30.0428L136.959 31.0427C135.916 31.053 134.871 31.0581 133.824 31.0581V30.0581ZM143.195 29.9202C145.281 29.8587 147.362 29.7768 149.438 29.6745L149.487 30.6733C147.405 30.7759 145.317 30.8581 143.224 30.9198L143.195 29.9202ZM155.673 29.3056C157.755 29.1617 159.831 28.9974 161.902 28.8129L161.991 29.8089C159.914 29.994 157.831 30.1589 155.742 30.3032L155.673 29.3056ZM168.118 28.1964C170.192 27.9699 172.26 27.723 174.321 27.456L174.45 28.4478C172.382 28.7156 170.307 28.9632 168.227 29.1905L168.118 28.1964ZM180.509 26.5917C182.571 26.2825 184.627 25.9531 186.676 25.6038L186.844 26.5896C184.789 26.94 182.726 27.2705 180.657 27.5807L180.509 26.5917ZM192.824 24.492C194.873 24.1003 196.914 23.6887 198.947 23.2572L199.155 24.2354C197.115 24.6683 195.067 25.0813 193.012 25.4742L192.824 24.492ZM205.046 21.899C207.076 21.4253 209.099 20.9318 211.114 20.4187L211.361 21.3878C209.339 21.9025 207.31 22.3976 205.273 22.8729L205.046 21.899ZM217.153 18.816C219.162 18.261 221.164 17.6863 223.157 17.0923L223.442 18.0506C221.443 18.6465 219.435 19.2231 217.419 19.7799L217.153 18.816ZM229.126 15.2475C231.111 14.6119 233.088 13.957 235.055 13.283L235.379 14.229C233.405 14.9052 231.422 15.5622 229.43 16.1999L229.126 15.2475ZM240.945 11.1991C242.903 10.4841 244.851 9.75 246.791 8.9971L247.153 9.92932C245.207 10.6846 243.252 11.4211 241.288 12.1384L240.945 11.1991ZM252.591 6.67767C254.519 5.88442 256.436 5.07244 258.344 4.24195L258.743 5.15884C256.829 5.992 254.905 6.8066 252.972 7.60241L252.591 6.67767Z"
            fill="#AFAFAF"
          />
        </svg>
        <div className=" w-20 h-20 rounded-tl-xl rounded-br-xl rounded-tr-xl bg-[#CBE4DE]"></div>
      </div>
    </div>
  );
};

export default StepsSections;