import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Nihilist Substitution Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Nihilist Substitution Cipher is a polyalphabetic cipher similar to the
        Polybius square. It encrypts pairs of letters into numbers and then uses
        these numbers to generate the ciphertext. It provides more security than
        simple substitution ciphers by replacing plaintext letters with pairs of
        numbers.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Choose a keyword (key): CIPHER.</Text>
      <Text>
        Create a Polybius square using the keyword and the remaining letters of
        the alphabet.
      </Text>
      <Text>Example Polybius square:</Text>
      <Image src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg" width={300} />
      <Text>
        Convert each plaintext letter pair into its corresponding number pair
        using the Polybius square.
      </Text>
      <Text>Example:</Text>
      <Text>- Plaintext: HE</Text>
      <Text>- Encrypted: 23 11</Text>
      <Text>Combine all number pairs to form the ciphertext.</Text>
      <Text>Encrypted message: 23114717201104</Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Nihilist_cipher"
        target="_blank"
      >
        Wikipedia - Nihilist Cipher
      </Link>
      <Link href="https://www.cryptologie.net/en/chiffrement/nihilist-cipher.html" target="_blank">
        cryptologie.net - Nihilist Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
