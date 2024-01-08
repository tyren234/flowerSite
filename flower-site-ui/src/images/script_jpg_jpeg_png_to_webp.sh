rm *.webp
for f in *.jpg; do cwebp -q 75 -mt $f -o ${f%.*}.webp; done
for f in *.jpeg; do cwebp -q 75 -mt $f -o ${f%.*}.webp; done
for f in *.png; do cwebp -q 75 -mt $f -o ${f%.*}.webp; done
