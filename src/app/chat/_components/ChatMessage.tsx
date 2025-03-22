import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Globe } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Définition des types
interface LocalizedText {
  en?: string;
  fr?: string;
  [key: string]: string | undefined;
}

interface RelevantLink {
  url: string;
  title: string | LocalizedText;
  type?: string | LocalizedText;
}

interface ExpertiseItem {
  name: string | LocalizedText;
  description?: string | LocalizedText;
}

interface Partner {
  name: string | LocalizedText;
  type?: string | LocalizedText;
  website?: string;
  description?: string | LocalizedText;
  expertise?: Array<string | LocalizedText>;
}

interface Member {
  name: string | LocalizedText;
  type?: string | LocalizedText;
  website?: string;
  description?: string | LocalizedText;
  expertise?: Array<string | LocalizedText>;
}

interface Message {
  text: string | LocalizedText;
  confidence?: number;
  relatedPartners?: Partner[];
  relatedMembers?: Member[];
  relevantLinks?: RelevantLink[];
}

interface EnhancedMessageProps {
  message: Message;
  language?: string;
}

// Helper function to handle multilingual text
const getLocalizedText = (text: string | LocalizedText | undefined, language: string): string => {
  if (typeof text === 'string') return text;
  if (text && typeof text === 'object' && (text.fr || text.en)) {
    return text[language] || text.en || text.fr || ''; // Fallback chain
  }
  return '';
};

const EnhancedMessage: React.FC<EnhancedMessageProps> = ({ message, language = 'en' }) => {
  const [isMetadataOpen, setIsMetadataOpen] = useState(false);
  
  const hasAdditionalInfo = (message.relatedPartners?.length || 0) > 0 || 
                           (message.relatedMembers?.length || 0) > 0 || 
                           (message.relevantLinks?.length || 0) > 0;

  if (!hasAdditionalInfo) {
    return <div className="break-words">{getLocalizedText(message.text, language)}</div>;
  }

  return (
    <div className="space-y-3">
      <div className="break-words">{getLocalizedText(message.text, language)}</div>
      
      {message.confidence && (
        <div className="flex items-center gap-2 text-xs text-blue-200/70">
          <div className="h-1 w-20 bg-blue-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${message.confidence * 100}%` }}
            />
          </div>
          <span>{Math.round(message.confidence * 100)}% confidence</span>
        </div>
      )}

      <Collapsible 
        open={isMetadataOpen} 
        onOpenChange={setIsMetadataOpen}
        className="space-y-2"
      >
        <CollapsibleTrigger className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-blue-200 transition-colors">
          {isMetadataOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isMetadataOpen 
            ? (language === 'fr' ? 'Voir moins' : 'Show less')
            : (language === 'fr' ? 'Voir plus de détails' : 'Show more details')
          }
        </CollapsibleTrigger>
        
        <CollapsibleContent className="space-y-4 pt-2">
          {message.relatedPartners?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-blue-200">
                {language === 'fr' ? 'Partenaires associés' : 'Related Partners'}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {message.relatedPartners.map((partner: Partner, index: number) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-blue-900/30 border border-blue-500/20 space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-medium text-blue-100">
                          {getLocalizedText(partner.name, language)}
                        </h5>
                        {partner.type && (
                          <div className="text-xs text-blue-300/70">
                            {getLocalizedText(partner.type, language)}
                          </div>
                        )}
                      </div>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300/70 hover:text-blue-300 transition-colors"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                    {partner.description && (
                      <p className="text-sm text-blue-100/80">
                        {getLocalizedText(partner.description, language)}
                      </p>
                    )}
                    {partner.expertise && (
                      <div className="flex flex-wrap gap-1">
                        {partner.expertise.map((exp, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-blue-800/40 text-blue-200 border border-blue-500/20"
                          >
                            {getLocalizedText(exp, language)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {message.relatedMembers?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-blue-200">
                {language === 'fr' ? 'Membres associés' : 'Related Members'}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {message.relatedMembers.map((member: Member, index: number) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-blue-900/30 border border-blue-500/20 space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-medium text-blue-100">
                          {getLocalizedText(member.name, language)}
                        </h5>
                        {member.type && (
                          <div className="text-xs text-blue-300/70">
                            {getLocalizedText(member.type, language)}
                          </div>
                        )}
                      </div>
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300/70 hover:text-blue-300 transition-colors"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                    {member.description && (
                      <p className="text-sm text-blue-100/80">
                        {getLocalizedText(member.description, language)}
                      </p>
                    )}
                    {member.expertise && (
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((exp, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-blue-800/40 text-blue-200 border border-blue-500/20"
                          >
                            {getLocalizedText(exp, language)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {message.relevantLinks?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-blue-200">
                {language === 'fr' ? 'Liens pertinents' : 'Relevant Links'}
              </h4>
              <div className="space-y-2">
                {message.relevantLinks.map((link: RelevantLink, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-blue-900/30 border border-blue-500/20 hover:bg-blue-800/40 transition-colors group"
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-medium group-hover:text-blue-300 transition-colors">
                        {getLocalizedText(link.title, language)}
                      </div>
                      {link.type && (
                        <div className="text-xs text-blue-300/70">
                          {getLocalizedText(link.type, language)}
                        </div>
                      )}
                    </div>
                    <ExternalLink size={16} className="text-blue-300/70 group-hover:text-blue-300" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default EnhancedMessage;