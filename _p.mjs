import sharp from "sharp";
const D="public/our sponsors/", O="public/sponsors/";
const pad=(b,bg)=>sharp(b).extend({top:12,bottom:12,left:12,right:12,background:bg}).png();
{ const b=await sharp(`${D}hsn-our-sponsors2.jpeg`).trim({background:"#ffffff",threshold:30}).png().toBuffer();
  await pad(b,"#ffffff").toFile(`${O}pricys-cakes.png`); }
{ const {data,info}=await sharp(`${D}hsn-our-sponsors3.jpeg`).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const out=Buffer.alloc(info.width*info.height*3);
  for(let i=0;i<info.width*info.height;i++){const l=(data[i*3]+data[i*3+1]+data[i*3+2])/3;const a=Math.min(1,l/30);
    for(let c=0;c<3;c++) out[i*3+c]=Math.round(255*(1-a)+35*a);}
  const b=await sharp(out,{raw:{width:info.width,height:info.height,channels:3}}).png().toBuffer();
  const t=await sharp(b).trim({background:"#ffffff",threshold:30}).png().toBuffer();
  await pad(t,"#ffffff").toFile(`${O}canvas-advertising.png`); }
{ const b=await sharp(`${D}hsn-our-sponsors4.jpeg`).trim({background:"#000000",threshold:25}).png().toBuffer();
  await pad(b,"#000000").toFile(`${O}latinos-en-texas.png`); }
{ const {width:w,height:h}=await sharp(`${D}hsn-our-sponsors5.jpeg`).metadata();
  const r=Math.round(w*0.16);
  const mask=Buffer.from(`<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}"/></svg>`);
  await sharp(`${D}hsn-our-sponsors5.jpeg`).composite([{input:mask,blend:"dest-in"}]).resize(700).png().toFile(`${O}k-logo.png`); }
const names=["pricys-cakes","canvas-advertising","latinos-en-texas","k-logo"];
const tiles=await Promise.all(names.map((n,i)=>{const bg=i==2?"#000000":"#ffffff";return sharp(`${O}${n}.png`).resize(300,200,{fit:"contain",background:bg}).flatten({background:bg}).png().toBuffer();}));
await sharp({create:{width:1200,height:200,channels:3,background:"#888888"}}).composite(tiles.map((t,i)=>({input:t,left:i*300,top:0}))).png().toFile(process.env.OUT);
