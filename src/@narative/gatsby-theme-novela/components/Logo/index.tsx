import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="250" 
        height="38"
        viewBox="0 0 250 38"
        fill="#7A8085"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g>
       <path d="M148,227.12a5.1,5.1,0,0,0-4,4.15c-.13.68-.13,1.21,0,6.92a17.12,17.12,0,0,1,0,2.39c-.25,1.6-1.13,2.37-3.05,2.67l-.81.12,0,.7,0,.7.46,0a5.29,5.29,0,0,1,2.1.74,2.76,2.76,0,0,1,1,1.19c.34.74.38,1.26.3,3.9,0,1.33-.07,3.45-.07,4.7,0,2.53,0,2.78.56,3.84a5.05,5.05,0,0,0,2.11,2.11A8,8,0,0,0,149,262c.31,0,.33,0,.38-.24a4.87,4.87,0,0,0,0-.6v-.36l-.43-.14a3.52,3.52,0,0,1-2.08-1.49c-.55-.93-.64-2.18-.45-5.91.2-4,.15-4.87-.29-6a5.26,5.26,0,0,0-3.11-3c-.28-.1-.28-.1-.1-.16a7.9,7.9,0,0,0,.81-.37,4.81,4.81,0,0,0,2.14-2.2,8.43,8.43,0,0,0,.48-1.19,18.44,18.44,0,0,0,.07-4.81c-.23-4.33-.07-5.37.94-6.32a3.12,3.12,0,0,1,1.45-.8c.51-.16.54-.18.56-.42a3,3,0,0,0,0-.59l0-.33h-.36A5.28,5.28,0,0,0,148,227.12Z" transform="translate(-140.07 -226.96)"/><path d="M167.71,227.55l0,.58.54.17a3.42,3.42,0,0,1,1.58.94c.9,1,1.07,2.29.8,6.22a21.73,21.73,0,0,0,0,4.6,5.29,5.29,0,0,0,3.51,4c.15.05.11.08-.31.24a5.39,5.39,0,0,0-3.21,3.94,27.42,27.42,0,0,0,0,5.05,18.73,18.73,0,0,1-.11,5.12,3.25,3.25,0,0,1-2.49,2.24l-.37.09V262h.37a6.9,6.9,0,0,0,2.43-.71,5.1,5.1,0,0,0,2.11-2.13c.62-1.26.74-2.18.63-4.87,0-1-.11-2.65-.15-3.62-.12-3,.1-4,1-4.82a5.14,5.14,0,0,1,2.68-.94l.23,0,0-.7,0-.71-.63-.09a3.87,3.87,0,0,1-2.43-1.1c-.89-1-1-2-.8-6,0-.84.1-2.26.1-3.14a6.25,6.25,0,0,0-.61-3.43,4.66,4.66,0,0,0-2.19-2.1,5.41,5.41,0,0,0-2.3-.59h-.47Z" transform="translate(-140.07 -226.96)"/><path d="M149.46,238.23V241h.22c.2,0,.23,0,.39-.61a6.35,6.35,0,0,1,2.87-4,5.85,5.85,0,0,1,2.78-.48l1.28,0v20.72h-3.31v.54h9.69v-.54h-3.3V235.86l1.37.06a5.42,5.42,0,0,1,2.67.46,6.12,6.12,0,0,1,2.84,3.84c.23.7.27.78.46.8l.2,0v-5.63H149.46Z" transform="translate(-140.07 -226.96)"/><path d="M191.47,256.27a8.47,8.47,0,0,1-3.48-.67,7.07,7.07,0,0,1-2.56-1.88,8.25,8.25,0,0,1-1.58-2.93,12.59,12.59,0,0,1-.54-3.8,9.43,9.43,0,0,1,.67-3.61,9.12,9.12,0,0,1,1.81-2.85,8.36,8.36,0,0,1,2.7-1.88,8.15,8.15,0,0,1,3.3-.67,13.86,13.86,0,0,1,1.59.09c.51.06,1,.14,1.44.22l1.19.25.84.2-.2,3.82h-1.08l-.46-2.78a3.4,3.4,0,0,0-1.31-.5,11.2,11.2,0,0,0-2.47-.23,5.17,5.17,0,0,0-2.35.54,5.3,5.3,0,0,0-1.88,1.53,7.35,7.35,0,0,0-1.26,2.43,10.85,10.85,0,0,0-.46,3.25,13.71,13.71,0,0,0,.36,3.18,8.5,8.5,0,0,0,1.11,2.68,5.79,5.79,0,0,0,1.9,1.85,5.21,5.21,0,0,0,2.74.69,10.6,10.6,0,0,0,1.35-.07,6.77,6.77,0,0,0,1-.18,3.62,3.62,0,0,0,.71-.29c.2-.11.38-.22.56-.34l.91-2.22,1,.14-.6,3.1a3.86,3.86,0,0,0-.91.17c-.29.1-.61.21-1,.32a11.45,11.45,0,0,1-1.27.3A10.16,10.16,0,0,1,191.47,256.27Z" transform="translate(-140.07 -226.96)"/><path d="M199.17,249.24a7.57,7.57,0,0,1,.52-2.9,6.91,6.91,0,0,1,1.39-2.18,6,6,0,0,1,1.95-1.37,5.49,5.49,0,0,1,2.23-.48,5.89,5.89,0,0,1,2.75.58,5.1,5.1,0,0,1,1.83,1.54,6.39,6.39,0,0,1,1,2.25,11,11,0,0,1,.31,2.66,7.57,7.57,0,0,1-.52,2.9,7,7,0,0,1-1.39,2.18,6,6,0,0,1-2,1.37,5.49,5.49,0,0,1-2.23.48,6,6,0,0,1-2.75-.57,5.09,5.09,0,0,1-1.82-1.55,6.39,6.39,0,0,1-1-2.25A11,11,0,0,1,199.17,249.24Zm6,5.8a3.94,3.94,0,0,0,1.71-.36,3.38,3.38,0,0,0,1.29-1.06,5.2,5.2,0,0,0,.82-1.74,9.33,9.33,0,0,0,.28-2.43,11.44,11.44,0,0,0-.21-2.24,6.08,6.08,0,0,0-.71-1.89,3.74,3.74,0,0,0-1.26-1.3,3.49,3.49,0,0,0-1.89-.48,4,4,0,0,0-1.71.35,3.43,3.43,0,0,0-1.28,1.06,5.16,5.16,0,0,0-.82,1.75,9.22,9.22,0,0,0-.28,2.43,11.64,11.64,0,0,0,.21,2.26,6,6,0,0,0,.71,1.89,3.6,3.6,0,0,0,1.26,1.28A3.48,3.48,0,0,0,205.14,255Z" transform="translate(-140.07 -226.96)"/><path d="M218.79,256.27a4.9,4.9,0,0,1-1.95-.4,4.51,4.51,0,0,1-1.68-1.21A6.12,6.12,0,0,1,214,252.6a8.86,8.86,0,0,1-.44-2.93,8.43,8.43,0,0,1,.48-2.87,7.16,7.16,0,0,1,1.36-2.34,6.36,6.36,0,0,1,2.15-1.57,6.69,6.69,0,0,1,2.85-.58,10.94,10.94,0,0,1,1.43.1c.46.07.87.14,1.24.23v-4.89l-2.57-.23v-.79l3.8-.37h.06l.4.32V255h1.5v.82l-1,.23a5.6,5.6,0,0,1-1.22.12,2.33,2.33,0,0,1-.4,0,.69.69,0,0,1-.29-.12.55.55,0,0,1-.17-.29,2.5,2.5,0,0,1,0-.53v-1a7.75,7.75,0,0,1-.77.72,5.71,5.71,0,0,1-1,.64,6.24,6.24,0,0,1-1.19.45A5.14,5.14,0,0,1,218.79,256.27Zm.7-1.44a3.93,3.93,0,0,0,1.14-.17,4.83,4.83,0,0,0,1.84-1,2.94,2.94,0,0,0,.58-.6v-8.75a1,1,0,0,0-.39-.32,4.14,4.14,0,0,0-.69-.27,8.85,8.85,0,0,0-.87-.18,7.22,7.22,0,0,0-.92-.06,5.17,5.17,0,0,0-1.9.34,3.83,3.83,0,0,0-1.51,1.05,5,5,0,0,0-1,1.81,9.2,9.2,0,0,0-.39,2.65,8.4,8.4,0,0,0,.32,2.52,4.67,4.67,0,0,0,.9,1.69,3.4,3.4,0,0,0,1.32,1A4.18,4.18,0,0,0,219.49,254.83Z" transform="translate(-140.07 -226.96)"/><path d="M234.11,256.27a5.57,5.57,0,0,1-2.47-.52,4.92,4.92,0,0,1-1.79-1.44,6.42,6.42,0,0,1-1.1-2.22,10,10,0,0,1-.37-2.83,8.06,8.06,0,0,1,.46-2.8,6.76,6.76,0,0,1,1.29-2.2,5.72,5.72,0,0,1,4.34-1.95,4.38,4.38,0,0,1,3.28,1.22,5.12,5.12,0,0,1,1.26,3.54c0,.45,0,.83,0,1.16a4.29,4.29,0,0,1-.11.87h-8.69v.2a1.34,1.34,0,0,0,0,.2,7.8,7.8,0,0,0,.4,2.45,5.53,5.53,0,0,0,1,1.75,3.79,3.79,0,0,0,1.38,1,4.1,4.1,0,0,0,1.68.34,5.66,5.66,0,0,0,1.06-.1,9,9,0,0,0,1.05-.28,7.91,7.91,0,0,0,.93-.41,3.91,3.91,0,0,0,.72-.49l.35.79a3.82,3.82,0,0,1-.87.66,6.21,6.21,0,0,1-1.13.54,7.66,7.66,0,0,1-1.29.36A6.76,6.76,0,0,1,234.11,256.27ZM234,243.51a4.09,4.09,0,0,0-1.43.24,3,3,0,0,0-1.16.78,4.35,4.35,0,0,0-.81,1.41,7.47,7.47,0,0,0-.4,2.11h6.89c0-.17,0-.36,0-.54s0-.37,0-.55a5.08,5.08,0,0,0-.18-1.39,2.91,2.91,0,0,0-.57-1.09,2.64,2.64,0,0,0-1-.71A3.4,3.4,0,0,0,234,243.51Z" transform="translate(-140.07 -226.96)"/><path d="M241.39,256v-1l1.64-.16V244.09l-1.93-.38v-1l3-.35h.06l.42.35v1.11l0,.62a7.62,7.62,0,0,1,1-.71,11.23,11.23,0,0,1,1.29-.69,9.89,9.89,0,0,1,1.44-.53,5.72,5.72,0,0,1,1.43-.2,4.61,4.61,0,0,1,1.92.35,2.7,2.7,0,0,1,1.16,1.06,4.62,4.62,0,0,1,.58,1.76,16.52,16.52,0,0,1,.16,2.49v6.87l1.83.15v1h-5.2v-1l1.68-.15V248a14.7,14.7,0,0,0-.1-1.88,3.42,3.42,0,0,0-.4-1.33,1.88,1.88,0,0,0-.86-.79,3.39,3.39,0,0,0-1.47-.27,4.06,4.06,0,0,0-1.12.17,7.79,7.79,0,0,0-1.14.42,9.21,9.21,0,0,0-1.08.57,9.08,9.08,0,0,0-.89.61v9.36l1.78.16v1Z" transform="translate(-140.07 -226.96)"/><path d="M257.33,252.5a3.26,3.26,0,0,1,.32-1.49,3.6,3.6,0,0,1,.89-1.14,5.24,5.24,0,0,1,1.34-.83,10.34,10.34,0,0,1,1.68-.56,18.07,18.07,0,0,1,1.91-.33c.66-.07,1.33-.11,2-.12v-.77a8,8,0,0,0-.14-1.59,2.55,2.55,0,0,0-.49-1.09,2,2,0,0,0-.92-.63,4.7,4.7,0,0,0-1.47-.2,6,6,0,0,0-1.41.17,10.88,10.88,0,0,0-1.29.39,9,9,0,0,0-1.07.48q-.46.24-.75.42h0l-.51-1a3.94,3.94,0,0,1,.67-.44,13.45,13.45,0,0,1,1.29-.6,12.92,12.92,0,0,1,1.66-.55,6.85,6.85,0,0,1,1.78-.23,7,7,0,0,1,2,.25,3,3,0,0,1,1.35.81,3.19,3.19,0,0,1,.73,1.43,8.79,8.79,0,0,1,.23,2.15v8h1.52v.82l-.46.11-.56.12-.59.09-.55,0-.4,0a.69.69,0,0,1-.29-.12.55.55,0,0,1-.17-.29,2.37,2.37,0,0,1-.05-.53v-1l-.66.56a8,8,0,0,1-1,.68,7,7,0,0,1-1.23.57,4.27,4.27,0,0,1-1.44.24,5.08,5.08,0,0,1-1.52-.22,3.6,3.6,0,0,1-1.28-.69,3.21,3.21,0,0,1-.87-1.17A4,4,0,0,1,257.33,252.5Zm4.59,2.46a3,3,0,0,0,.85-.14,6.61,6.61,0,0,0,.94-.38,7.79,7.79,0,0,0,.92-.53c.3-.19.58-.39.84-.59v-4.2a15.3,15.3,0,0,0-2.7.24,7.39,7.39,0,0,0-2,.64,3.18,3.18,0,0,0-1.2,1,2.24,2.24,0,0,0-.41,1.31,3.23,3.23,0,0,0,.21,1.25,2.17,2.17,0,0,0,.58.82,2.38,2.38,0,0,0,.87.44A4,4,0,0,0,261.92,255Z" transform="translate(-140.07 -226.96)"/><path d="M270.79,256v-1l1.56-.16V244.09l-1.93-.38v-1l2.95-.35h.06l.42.35v1.11l0,.62a8.19,8.19,0,0,1,1-.71,10.7,10.7,0,0,1,2.65-1.22,5.15,5.15,0,0,1,1.36-.2,4.19,4.19,0,0,1,2.05.43,2.78,2.78,0,0,1,1.19,1.35,6,6,0,0,1,.86-.58,9,9,0,0,1,1.21-.57,10.13,10.13,0,0,1,1.38-.45,5.55,5.55,0,0,1,1.37-.18,4.71,4.71,0,0,1,1.89.33,2.68,2.68,0,0,1,1.19,1,4.56,4.56,0,0,1,.62,1.75,15.33,15.33,0,0,1,.18,2.52v6.9l1.84.16v1h-5.21v-1l1.68-.16v-6.83a14.55,14.55,0,0,0-.11-1.86,3.76,3.76,0,0,0-.43-1.35,2,2,0,0,0-.9-.83,3.53,3.53,0,0,0-1.54-.28,4.17,4.17,0,0,0-1,.13,8.67,8.67,0,0,0-1,.33,9.84,9.84,0,0,0-.92.45c-.28.17-.53.33-.73.48a11.62,11.62,0,0,1,.19,1.32c0,.47.05,1,.05,1.58v6.86l1.86.16v1h-5.32v-1l1.78-.15V248a17,17,0,0,0-.09-1.88,3.44,3.44,0,0,0-.36-1.33,1.86,1.86,0,0,0-.83-.79,3.26,3.26,0,0,0-1.45-.27,3.93,3.93,0,0,0-1.1.17,8,8,0,0,0-1.12.42,8.21,8.21,0,0,0-1.06.57,10.21,10.21,0,0,0-.88.61v9.36l1.73.16v1Z" transform="translate(-140.07 -226.96)"/><path d="M300.31,256.27a5.57,5.57,0,0,1-2.47-.52,5,5,0,0,1-1.8-1.44,6.4,6.4,0,0,1-1.09-2.22,10,10,0,0,1-.37-2.83,8.06,8.06,0,0,1,.46-2.8,6.76,6.76,0,0,1,1.29-2.2,5.68,5.68,0,0,1,1.93-1.44,5.76,5.76,0,0,1,2.41-.51,4.38,4.38,0,0,1,3.28,1.22,5.12,5.12,0,0,1,1.26,3.54c0,.45,0,.83,0,1.16a4.29,4.29,0,0,1-.11.87h-8.7v.2a1.36,1.36,0,0,0,0,.2,7.8,7.8,0,0,0,.4,2.45,5.53,5.53,0,0,0,1,1.75,3.79,3.79,0,0,0,1.38,1,4.1,4.1,0,0,0,1.68.34,5.66,5.66,0,0,0,1.06-.1,8.34,8.34,0,0,0,1-.28,7.39,7.39,0,0,0,.94-.41,3.91,3.91,0,0,0,.72-.49l.35.79a4.05,4.05,0,0,1-.87.66,6.21,6.21,0,0,1-1.13.54,7.66,7.66,0,0,1-1.29.36A6.83,6.83,0,0,1,300.31,256.27Zm-.09-12.76a4.09,4.09,0,0,0-1.43.24,2.91,2.91,0,0,0-1.16.78,4.35,4.35,0,0,0-.81,1.41,7.47,7.47,0,0,0-.4,2.11h6.89c0-.17,0-.36,0-.54s0-.37,0-.55a5.08,5.08,0,0,0-.18-1.39,2.91,2.91,0,0,0-.57-1.09,2.72,2.72,0,0,0-1-.71A3.4,3.4,0,0,0,300.22,243.51Z" transform="translate(-140.07 -226.96)"/><path d="M310.36,246.26a1.13,1.13,0,0,1-.83-.34,1.25,1.25,0,0,1-.34-.91,1.44,1.44,0,0,1,.44-1,1.42,1.42,0,0,1,.45-.32,1.19,1.19,0,0,1,.51-.12,1.27,1.27,0,0,1,.54.11,1.1,1.1,0,0,1,.36.27,1.16,1.16,0,0,1,.2.4,1.51,1.51,0,0,1,.07.48,1.41,1.41,0,0,1-.12.59,1.54,1.54,0,0,1-.31.47,1.43,1.43,0,0,1-.44.3A1.39,1.39,0,0,1,310.36,246.26Zm0,10a1.17,1.17,0,0,1-.83-.34,1.27,1.27,0,0,1-.34-.92,1.31,1.31,0,0,1,.12-.56,1.51,1.51,0,0,1,.32-.47,1.39,1.39,0,0,1,.45-.31,1.19,1.19,0,0,1,.51-.12,1.27,1.27,0,0,1,.54.1,1.12,1.12,0,0,1,.36.28,1.08,1.08,0,0,1,.2.4,1.49,1.49,0,0,1,.07.47,1.46,1.46,0,0,1-.12.6,1.49,1.49,0,0,1-.31.46,1.43,1.43,0,0,1-.44.3A1.4,1.4,0,0,1,310.36,256.26Z" transform="translate(-140.07 -226.96)"/><path d="M326.47,256v-1l3.18-.15V239.14l-4.82.13-.73,4.92h-1.17l.4-6h14.54l.27,6H337l-.63-4.92-4.9-.13v15.74l3.48.16v1Z" transform="translate(-140.07 -226.96)"/><path d="M339.93,252.5a3.4,3.4,0,0,1,.32-1.49,3.75,3.75,0,0,1,.89-1.14,5.31,5.31,0,0,1,1.35-.83,9.73,9.73,0,0,1,1.68-.56,17.87,17.87,0,0,1,1.9-.33c.67-.07,1.33-.11,2-.12v-.77a7.28,7.28,0,0,0-.15-1.59,2.54,2.54,0,0,0-.48-1.09,2,2,0,0,0-.93-.63,4.61,4.61,0,0,0-1.47-.2,6,6,0,0,0-1.4.17,9.85,9.85,0,0,0-1.29.39,8.31,8.31,0,0,0-1.07.48q-.46.24-.75.42h0l-.52-1a4.19,4.19,0,0,1,.68-.44,11.49,11.49,0,0,1,1.29-.6,12.75,12.75,0,0,1,1.65-.55,7.75,7.75,0,0,1,3.83,0,3,3,0,0,1,1.34.81,3.2,3.2,0,0,1,.74,1.43,8.83,8.83,0,0,1,.22,2.15v8h1.53v.82l-.46.11-.56.12-.6.09-.54,0-.4,0a.64.64,0,0,1-.29-.12.49.49,0,0,1-.17-.29,1.89,1.89,0,0,1,0-.53v-1c-.17.14-.39.32-.66.56a8.14,8.14,0,0,1-1,.68,7,7,0,0,1-1.23.57,4.25,4.25,0,0,1-1.43.24,5.19,5.19,0,0,1-1.53-.22,3.56,3.56,0,0,1-1.27-.69,3.35,3.35,0,0,1-.88-1.17A4.14,4.14,0,0,1,339.93,252.5Zm4.59,2.46a3,3,0,0,0,.86-.14,6.51,6.51,0,0,0,.93-.38,7.17,7.17,0,0,0,.93-.53c.3-.19.58-.39.84-.59v-4.2a15.21,15.21,0,0,0-2.7.24,7.27,7.27,0,0,0-2,.64,3.18,3.18,0,0,0-1.2,1,2.17,2.17,0,0,0-.41,1.31,3.23,3.23,0,0,0,.21,1.25,2.07,2.07,0,0,0,.58.82,2.26,2.26,0,0,0,.86.44A4.11,4.11,0,0,0,344.52,255Z" transform="translate(-140.07 -226.96)"/><path d="M353.4,256v-1l1.55-.16V244.09l-1.93-.38v-1l3-.35H356l.42.35v1.11l0,.62a9.12,9.12,0,0,1,1-.71,10.92,10.92,0,0,1,1.27-.69,9.71,9.71,0,0,1,1.39-.53,5.08,5.08,0,0,1,1.35-.2,4.23,4.23,0,0,1,2.06.43,2.83,2.83,0,0,1,1.19,1.35,6,6,0,0,1,.86-.58,8,8,0,0,1,1.21-.57,10.46,10.46,0,0,1,1.37-.45,5.67,5.67,0,0,1,1.37-.18,4.73,4.73,0,0,1,1.9.33,2.73,2.73,0,0,1,1.19,1,4.74,4.74,0,0,1,.62,1.75,16.64,16.64,0,0,1,.17,2.52v6.9l1.84.16v1H370v-1l1.68-.16v-6.83a12.81,12.81,0,0,0-.12-1.86,3.58,3.58,0,0,0-.42-1.35,2,2,0,0,0-.91-.83,3.52,3.52,0,0,0-1.53-.28,4.12,4.12,0,0,0-1,.13,7.61,7.61,0,0,0-1,.33,8.76,8.76,0,0,0-.92.45c-.29.17-.53.33-.74.48a9.73,9.73,0,0,1,.19,1.32c0,.47.06,1,.06,1.58v6.86l1.85.16v1h-5.32v-1l1.78-.15V248c0-.72,0-1.35-.08-1.88a3.43,3.43,0,0,0-.37-1.33,1.81,1.81,0,0,0-.83-.79,3.23,3.23,0,0,0-1.45-.27,3.86,3.86,0,0,0-1.09.17,8.12,8.12,0,0,0-1.13.42,8.78,8.78,0,0,0-1.05.57,10.48,10.48,0,0,0-.89.61v9.36l1.74.16v1Z" transform="translate(-140.07 -226.96)"/> </g>
      </svg>

      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="#7A8085"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
         <path d="M245.44,236.16a5.08,5.08,0,0,0-4,4.15c-.14.67-.14,1.21,0,6.92a17.18,17.18,0,0,1,0,2.39c-.25,1.6-1.13,2.36-3,2.66l-.81.13,0,.7,0,.7.46.05a5.09,5.09,0,0,1,2.1.74,2.9,2.9,0,0,1,1,1.18c.33.75.37,1.27.3,3.91,0,1.33-.07,3.45-.07,4.69,0,2.54,0,2.79.55,3.85a5,5,0,0,0,2.12,2.11,8.14,8.14,0,0,0,2.4.66c.31,0,.33,0,.38-.24a4.83,4.83,0,0,0,0-.6v-.36l-.44-.14a3.56,3.56,0,0,1-2.08-1.49c-.55-.93-.64-2.18-.45-5.92.2-4,.15-4.87-.29-6a5.26,5.26,0,0,0-3.11-3c-.28-.1-.28-.11-.1-.16a7.9,7.9,0,0,0,.81-.37,4.81,4.81,0,0,0,2.14-2.2,8.66,8.66,0,0,0,.49-1.19,19.21,19.21,0,0,0,.06-4.82c-.23-4.32-.07-5.36.94-6.31a3.17,3.17,0,0,1,1.45-.8c.51-.16.54-.19.56-.42a2.38,2.38,0,0,0,0-.59l-.05-.33h-.36A5.28,5.28,0,0,0,245.44,236.16Z" transform="translate(-237.53 -236)"/><path d="M265.17,236.58l0,.59.54.17a3.42,3.42,0,0,1,1.58.94c.9,1,1.07,2.29.81,6.22a21.27,21.27,0,0,0,0,4.6,6,6,0,0,0,1.83,3.07,6,6,0,0,0,1.68.94c.15,0,.11.07-.31.24a5.36,5.36,0,0,0-3.2,3.94,26.15,26.15,0,0,0,0,5,18.76,18.76,0,0,1-.11,5.12,3.25,3.25,0,0,1-2.49,2.24l-.37.08V271h.37a7.06,7.06,0,0,0,2.43-.71,5.06,5.06,0,0,0,2.11-2.14c.62-1.25.74-2.17.63-4.86,0-1-.11-2.65-.14-3.62-.13-3,.09-4.05,1-4.82a5.07,5.07,0,0,1,2.67-.94l.23,0,0-.7,0-.7-.62-.09a3.85,3.85,0,0,1-2.44-1.11c-.89-1-1-2-.79-6,0-.83.09-2.25.09-3.13a6.14,6.14,0,0,0-.61-3.43,4.75,4.75,0,0,0-2.18-2.11,5.61,5.61,0,0,0-2.3-.58h-.47Z" transform="translate(-237.53 -236)"/><path d="M246.92,247.27v2.81h.22c.21,0,.23,0,.39-.61a6.39,6.39,0,0,1,2.87-4,5.75,5.75,0,0,1,2.78-.48l1.28,0v20.72h-3.31v.53h9.7v-.53h-3.31V244.9l1.37,0a5.49,5.49,0,0,1,2.67.47,6.09,6.09,0,0,1,2.84,3.84c.23.7.27.78.46.8l.2,0v-5.62H246.92Z" transform="translate(-237.53 -236)"/>
        
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;