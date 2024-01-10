rm -rf project*
rm -rf template/.idea

for A in {A..I} ; do
	TARGET=projecta${A}
	cp -r template/ ${TARGET} ; 
	sed -i "s\projectA\\${TARGET}\g" ${TARGET}/package.json ${TARGET}/package-lock.json ; 
done

