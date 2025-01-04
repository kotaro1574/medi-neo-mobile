import { LucideProps, Settings, SkipForward } from "lucide-react-native";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";

export const Icons = {
  settings: Settings,
  skipForward: SkipForward,
  edit: (props: LucideProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5H4.5V19.5H19.5V12Z"
        fill="#A4A4A4"
      />
      <Path
        d="M11.0145 12.99L12.252 12.813L19.854 5.2125C19.9256 5.14332 19.9827 5.06056 20.0221 4.96905C20.0614 4.87755 20.082 4.77914 20.0829 4.67955C20.0838 4.57997 20.0648 4.48121 20.0271 4.38904C19.9894 4.29686 19.9337 4.21312 19.8633 4.1427C19.7929 4.07229 19.7091 4.0166 19.6169 3.97888C19.5248 3.94117 19.426 3.9222 19.3264 3.92306C19.2268 3.92393 19.1284 3.94462 19.0369 3.98393C18.9454 4.02323 18.8627 4.08037 18.7935 4.152L11.19 11.7525L11.013 12.99H11.0145ZM20.9145 3.09C21.1236 3.29895 21.2894 3.54705 21.4026 3.82013C21.5158 4.09321 21.574 4.38591 21.574 4.6815C21.574 4.9771 21.5158 5.2698 21.4026 5.54287C21.2894 5.81595 21.1236 6.06405 20.9145 6.273L13.137 14.0505C13.0223 14.1656 12.8733 14.2404 12.7125 14.2635L10.2375 14.6175C10.1221 14.6341 10.0045 14.6235 9.89395 14.5867C9.78339 14.5499 9.68293 14.4878 9.60053 14.4054C9.51813 14.323 9.45607 14.2226 9.41926 14.112C9.38245 14.0015 9.37191 13.8838 9.38848 13.7685L9.74248 11.2935C9.7652 11.1328 9.83942 10.9839 9.95398 10.869L17.733 3.0915C18.1549 2.66969 18.7271 2.43273 19.3237 2.43273C19.9203 2.43273 20.4925 2.66969 20.9145 3.0915V3.09Z"
        fill="#A4A4A4"
      />
    </Svg>
  ),
  groups: (props: LucideProps) => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#clip0_394_1770)">
        <Path
          d="M16.5996 0C18.8699 0 20 1.13006 20 3.36794V16.6325C20 18.8704 18.8699 20 16.5991 20H3.41105C1.15139 20 0 18.8811 0 16.6325V3.36794C0 1.11894 1.15139 0 3.41151 0H16.5996ZM4.43729 13.7082C4.19142 13.7082 3.95562 13.8058 3.78177 13.9797C3.60791 14.1535 3.51024 14.3893 3.51024 14.6352C3.51024 14.8811 3.60791 15.1169 3.78177 15.2907C3.95562 15.4646 4.19142 15.5623 4.43729 15.5623C4.68315 15.5623 4.91895 15.4646 5.0928 15.2907C5.26666 15.1169 5.36433 14.8811 5.36433 14.6352C5.36433 14.3893 5.26666 14.1535 5.0928 13.9797C4.91895 13.8058 4.68315 13.7082 4.43729 13.7082ZM16.1097 13.7082H8.52461C8.05924 13.7082 7.68193 14.1235 7.68193 14.6352C7.68193 15.1474 8.05924 15.5623 8.52461 15.5623H16.1097C16.575 15.5623 16.9523 15.1474 16.9523 14.6352C16.9523 14.1235 16.575 13.7082 16.1097 13.7082ZM4.43729 9.07296C4.19142 9.07296 3.95562 9.17063 3.78177 9.34448C3.60791 9.51834 3.51024 9.75413 3.51024 10C3.51024 10.2459 3.60791 10.4817 3.78177 10.6555C3.95562 10.8294 4.19142 10.927 4.43729 10.927C4.68315 10.927 4.91895 10.8294 5.0928 10.6555C5.26666 10.4817 5.36433 10.2459 5.36433 10C5.36433 9.75413 5.26666 9.51834 5.0928 9.34448C4.91895 9.17063 4.68315 9.07296 4.43729 9.07296ZM16.1097 9.07296H8.52461C8.05924 9.07296 7.68193 9.48827 7.68193 10C7.68193 10.5122 8.05924 10.927 8.52461 10.927H16.1097C16.575 10.927 16.9523 10.5122 16.9523 10C16.9523 9.48827 16.575 9.07296 16.1097 9.07296ZM4.43729 4.43775C4.19142 4.43775 3.95562 4.53542 3.78177 4.70927C3.60791 4.88313 3.51024 5.11892 3.51024 5.36479C3.51024 5.61066 3.60791 5.84645 3.78177 6.02031C3.95562 6.19416 4.19142 6.29183 4.43729 6.29183C4.68315 6.29183 4.91895 6.19416 5.0928 6.02031C5.26666 5.84645 5.36433 5.61066 5.36433 5.36479C5.36433 5.11892 5.26666 4.88313 5.0928 4.70927C4.91895 4.53542 4.68315 4.43775 4.43729 4.43775ZM16.1097 4.43775H8.52461C8.05924 4.43775 7.68193 4.85306 7.68193 5.36479C7.68193 5.87698 8.05924 6.29183 8.52461 6.29183H16.1097C16.575 6.29183 16.9523 5.87698 16.9523 5.36479C16.9523 4.85306 16.575 4.43775 16.1097 4.43775Z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_394_1770">
          <rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  ),
  logout: (props: LucideProps) => (
    <Svg width="14" height="15" viewBox="0 0 14 15" fill="none" {...props}>
      <Path
        d="M2.91667 3.41667H6.41667C6.7375 3.41667 7 3.15417 7 2.83333C7 2.5125 6.7375 2.25 6.41667 2.25H2.91667C2.275 2.25 1.75 2.775 1.75 3.41667V11.5833C1.75 12.225 2.275 12.75 2.91667 12.75H6.41667C6.7375 12.75 7 12.4875 7 12.1667C7 11.8458 6.7375 11.5833 6.41667 11.5833H2.91667V3.41667Z"
        fill="currentColor"
      />
      <Path
        d="M12.0458 7.29586L10.4183 5.66836C10.3778 5.62668 10.3257 5.59805 10.2687 5.58615C10.2118 5.57424 10.1526 5.57959 10.0988 5.60152C10.0449 5.62344 9.99877 5.66094 9.96633 5.70922C9.9339 5.7575 9.9166 5.81436 9.91667 5.87252V6.91669H5.83333C5.5125 6.91669 5.25 7.17919 5.25 7.50002C5.25 7.82086 5.5125 8.08336 5.83333 8.08336H9.91667V9.12752C9.91667 9.39002 10.2317 9.51836 10.4125 9.33169L12.04 7.70419C12.1567 7.59336 12.1567 7.40669 12.0458 7.29586Z"
        fill="currentColor"
      />
    </Svg>
  ),
  fillUser: (props: LucideProps) => (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M5.625 4.875C5.625 6.73575 7.13925 8.25 9 8.25C10.8608 8.25 12.375 6.73575 12.375 4.875C12.375 3.01425 10.8608 1.5 9 1.5C7.13925 1.5 5.625 3.01425 5.625 4.875ZM15 15.75H15.75V15C15.75 12.1058 13.3942 9.75 10.5 9.75H7.5C4.605 9.75 2.25 12.1058 2.25 15V15.75H15Z"
        fill="currentColor"
      />
    </Svg>
  ),
  hamburger: (props: LucideProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.5 6.5H19.5M4.5 12H19.5M4.5 17.5H19.5"
        stroke="currentColor"
        strokeWidth="0.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};
