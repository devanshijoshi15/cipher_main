import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Gronsfeld Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of polyalphabetic substitution. A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets.Gronsfeld Cipher is a cryptography method that works like a Vigenere Cipher. Gronsfeld Cipher uses keys from decimal numbers instead of letters, but sometimes it can uses ASCII as the key substitustion. The key will be repeated periodically with the intention that each plaintext has a key.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: GEEKSFORGEEKS .</Text>
      <Text>write the Key:AYUSH .</Text>
      <Text>
      Output : Ciphertext :  GCYCZFMLYLEIM
      </Text>
      For generating key, the given keyword is repeated
              in a circular manner until it matches the length of 
                 the plain text.
                 The keyword "AYUSH" generates the key "AYUSHAYUSHAYU"
                  The plain text is then encrypted using the process 
                        explained below.
      <Text>
      The first letter of the plaintext, G is paired with A, the first letter of the key. So use row G and column A of the Vigenère square, namely G. Similarly, for the second letter of the plaintext, the second letter of the key is used, the letter at row E, and column Y is C. The rest of the plaintext is enciphered in a similar fashion.
      </Text>
      <Text></Text>
     
      <Text>- Encrypted: J (H shifted by 2 positions)</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Vigen%C3%A8re_square_shading.png" />
       
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: GCYCZFMLYLEIM.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Gronsfeld_cipher"
        target="_blank"
      >
        Wikipedia - Gronsfeld Cipher
      </Link>
      <Link href="https://www.cryptomuseum.com/crypto/gronsfeld/" target="_blank">
        Crypto Museum - Gronsfeld Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };