<div align="center">

![Kirishima Banner](https://cdn.discordapp.com/attachments/891939988088975372/931079377771450388/kirishima-ship-banner.png)

# @kirishima/collection

</div>

# Features
- Written in TypeScript
- Asynchronous 

# Example
```ts
import { KirishimaCollection } from "@kirishima/collection";
(async () => {
    const collection = new KirishimaCollection();
    await collection.set("key", "value");
    const savedData = await collection.get("key");
    console.log(savedData);
})()
```